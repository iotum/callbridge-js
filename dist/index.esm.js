// src/widget.ts
import { EventEmitter } from "events";
var PING = "_ping";
var PONG = "_pong";
var AUTH_PATH = "/auth";
var FramePermissionsPolicy = [
  "camera",
  "microphone",
  "autoplay",
  "fullscreen",
  "display-capture"
].join(";");
function createInstance(container, url, {
  target,
  features,
  attached
}) {
  if (container instanceof Window) {
    return container.open(url, target, features);
  }
  if (!attached) {
    document.body.appendChild(container);
  }
  const instance = document.createElement("iframe");
  Object.assign(instance.style, {
    ...getStyles(attached),
    title: `widget-${Date.now()}`,
    // https://webhint.io/docs/user-guide/hints/hint-axe/text-alternatives/
    border: "none",
    width: "100%",
    height: "100%"
  });
  container.appendChild(
    Object.assign(instance, {
      allow: FramePermissionsPolicy,
      src: url
    })
  );
  return instance;
}
function getStyles(visible) {
  return { display: visible ? "block" : "none" };
}
function setParams(url, params) {
  for (const opt of Object.keys(params)) {
    const val = params[opt];
    if (val !== void 0 && val !== null) {
      url.searchParams.set(opt, String(val));
    }
  }
  if (url.pathname !== AUTH_PATH) {
    url.searchParams.set("events", "true");
  }
}
var Widget = class {
  constructor({
    container,
    domain,
    sso,
    target: { name, features, checkExisting } = {}
  }, autoLoad = false) {
    this.emitter = new EventEmitter();
    this._attached = true;
    /** @internal */
    this._container = null;
    /** @internal */
    this._instance = null;
    /** @internal */
    this._checkExisting = false;
    /** @internal */
    this._ready = false;
    /** @internal */
    this._load = async (params) => {
      if (!this._container || this._instance) {
        return;
      }
      if (typeof params.redirect_url === "string") {
        const redirectUrl = new URL(params.redirect_url, this._url);
        setParams(redirectUrl, {
          ...params,
          redirect_url: null
        });
        const isSSO = this._url.pathname === AUTH_PATH;
        if (isSSO) {
          setParams(this._url, {
            // Do not persist the session under iframe
            remember_me: this._container === window ? "1" : "0",
            redirect_url: `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`
          });
        } else {
          this._url = redirectUrl;
        }
      } else {
        setParams(this._url, params);
      }
      if (this._checkExisting) {
        await new Promise((resolve) => {
          this.once("widget.LOAD", resolve);
          setTimeout(resolve, 1500);
          if ("BroadcastChannel" in self) {
            const channel = new BroadcastChannel("widget-channel");
            channel.postMessage(PING);
            channel.close();
          }
        });
        if (this._instance) {
          this._send("widget", PONG);
          return;
        }
      }
      if (!this._container) {
        return;
      }
      this._instance = createInstance(this._container, this._url.href, {
        target: this._target,
        features: this._features,
        attached: this._attached
      });
      try {
        this._instance.onerror = (ev) => {
          this._error = ev;
          this.emit("widget.ERROR", ev instanceof Error ? ev.message : ev);
        };
      } catch (ex) {
        console.warn(ex);
        this.emit("widget.ERROR", "Unable to open");
      }
    };
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this._beforeUnload = (ev) => {
      if (this.wnd && !this.wnd.closed) {
        this._send("widget", PING, { name: this._target });
      }
    };
    /** @internal */
    this._processEvent = ({ data, source }) => {
      if (!this._instance && data) {
        const { type, event, name } = data;
        if (type === "widget" && event === PING && name === this._target) {
          this._instance = source;
          this._ready = true;
          this.emit("widget.LOAD");
          return;
        }
      }
      if (source === this.wnd) {
        const { type, event, ...extra } = data;
        if (type && event) {
          switch (event) {
            case "READY":
              this._ready = true;
              this.emit("widget.LOAD");
              break;
            case "UNLOAD":
              this.unload();
              this.emit("widget.UNLOAD");
              break;
            case PING:
              return;
            default:
              break;
          }
          this.emit(`${type}.${event}`, extra);
        }
      }
    };
    /** @internal */
    this._send = (type, action, data = {}) => {
      this.wnd?.postMessage(
        {
          type,
          action,
          ...data
        },
        "*"
      );
    };
    if (container) {
      if (typeof container === "string") {
        this._container = document.querySelector(container);
      } else {
        this._container = container;
        if (container instanceof HTMLElement) {
          this._attached = document.body.contains(container);
        }
      }
    }
    if (!this._container) {
      throw new Error("Unable to locate the container element");
    }
    this._url = new URL(`https://${domain}`);
    if (sso) {
      const { hostId, token } = sso;
      if (!hostId || !token) {
        throw new Error("Missing SSO parameters");
      }
      this._url.pathname = AUTH_PATH;
      this._url.searchParams.set("host_id", String(hostId));
      this._url.searchParams.set("login_token_public_key", token);
    }
    window.addEventListener("message", this._processEvent);
    if (this._container === window) {
      window.addEventListener("beforeunload", this._beforeUnload);
    }
    this._target = name;
    this._features = features;
    this._checkExisting = Boolean(name && checkExisting);
    if (autoLoad) {
      this._load({ redirect_url: "/page_to_see" });
    }
  }
  /**
   * Unloads the widget by removing the iframe or close the tab/window.
   */
  unload() {
    this._container = null;
    window.removeEventListener("message", this._processEvent);
    window.removeEventListener("beforeunload", this._beforeUnload);
    if (this._instance) {
      if (this._instance instanceof Element) {
        if (!this._attached && this._instance.style.display === "none") {
          this._instance.parentElement?.remove();
        }
        this._instance.remove();
      } else {
        this._instance.close();
      }
      this._instance = null;
    }
    this._ready = false;
  }
  /**
   * Toggles the visibility of the widget on the page.
   *
   * Not available for pop-up.
   *
   * @param visible whether the widget should be visible
   */
  toggle(visible) {
    if (this._instance instanceof HTMLElement) {
      Object.assign(this._instance.style, getStyles(visible));
    }
  }
  /**
   * Whether the widget is ready.
   */
  get isReady() {
    return this._ready;
  }
  /**
   * The widget instance.
   */
  get instance() {
    return this._instance;
  }
  /**
   * The Window or WindowProxy instance of the widget.
   */
  get wnd() {
    if (this._instance) {
      return this._instance instanceof Element ? this._instance.contentWindow : this._instance;
    }
    return null;
  }
  /**
   * Adds the `listener` function to the end of the listeners array for the event named `eventName`.
   */
  on(eventName, listener) {
    this.emitter.on(eventName, listener);
    return this;
  }
  /**
   * Removes the specified `listener` from the listener array for the event named `eventName`.
   */
  off(eventName, listener) {
    this.emitter.off(eventName, listener);
    return this;
  }
  /**
   * Adds a one-timelistener function for the event named eventName.
   * The next time eventName is triggered, this listener is removed and then invoked.
   */
  once(eventName, listener) {
    this.emitter.once(eventName, listener);
    return this;
  }
  /**
   * Synchronously calls each of the listeners registered for the event namedeventName,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns true if the event had listeners, false otherwise.
   */
  emit(eventName, data) {
    return this.emitter.emit(eventName, data);
  }
  /**
   * Removes all listeners, or those of the specified `eventName`.
   *
   * It is bad practice to remove listeners added elsewhere in the code,
   * particularly when the instance was created by some other component or module.
   */
  removeAllListeners(event) {
    this.emitter.removeAllListeners(event);
    return this;
  }
};

// src/dashboard.ts
var Service = /* @__PURE__ */ ((Service2) => {
  Service2["None"] = "";
  Service2["Search"] = "Search";
  Service2["Team"] = "Team";
  Service2["Drive"] = "Drive";
  Service2["Contacts"] = "Contacts";
  Service2["Meet"] = "Meet";
  return Service2;
})(Service || {});
var LayoutOption = /* @__PURE__ */ ((LayoutOption2) => {
  LayoutOption2["full"] = "full";
  LayoutOption2["list"] = "list";
  LayoutOption2["main"] = "main";
  LayoutOption2["none"] = "none";
  return LayoutOption2;
})(LayoutOption || {});
var MeetingAction = /* @__PURE__ */ ((MeetingAction2) => {
  MeetingAction2["auto"] = "auto";
  MeetingAction2["popup"] = "popup";
  MeetingAction2["intercept"] = "intercept";
  return MeetingAction2;
})(MeetingAction || {});
var ScheduleAction = /* @__PURE__ */ ((ScheduleAction2) => {
  ScheduleAction2["auto"] = "auto";
  ScheduleAction2["intercept"] = "intercept";
  return ScheduleAction2;
})(ScheduleAction || {});
var SearchContentType = /* @__PURE__ */ ((SearchContentType2) => {
  SearchContentType2["event"] = "event";
  return SearchContentType2;
})(SearchContentType || {});
var Dashboard = class extends Widget {
  constructor(options, service = "" /* None */, serviceOptions = {}) {
    super(options);
    switch (service) {
      case "Team" /* Team */:
      case "Drive" /* Drive */:
      case "Contacts" /* Contacts */:
      case "Meet" /* Meet */:
      case "Search" /* Search */:
        this.once("dashboard.READY", () => this.load(service, serviceOptions));
        break;
    }
    switch (service) {
      case "Search" /* Search */:
        this.search = (query, {
          contentType = "event" /* event */,
          ...opts
        } = {}) => {
          if (!query) {
            throw new Error("Nothing to search");
          }
          this._send("dashboard", "search", {
            query,
            contentType,
            ...opts
          });
        };
        break;
    }
    this._load({
      redirect_url: `/conf/loading`
    });
  }
  /**
   * Search for thing.
   * @param query The search query.
   * @param options Optional, search options.
   * @throws {Error}
   *   - "Not implemented" when the service is not "Search".
   *   - "Nothing to search" when the query is empty.
   */
  search(query, options) {
    query;
    options;
    throw new Error("Not implemented");
  }
  /**
   * Loads the service.
   * @param service the service to load.
   * @param options Optional, service options.
   */
  load(service, options = {}) {
    this._send("dashboard", "load", { service, ...options });
  }
  /**
   * Loads a specific page from the session history.
   * @param delta The position in the history to which you want to move,
   * relative to the current page. A negative value moves backwards,
   * a positive value moves forwards.
   */
  go(delta) {
    this._send("dashboard", "go", { delta });
  }
  /**
   * Hides elements on the dashboard.
   * @param ids An array of element IDs to hide.
   */
  setHiddenElements(ids) {
    this._send("dashboard", "setHiddenElements", { ids });
  }
};

// src/room.ts
var Room = class extends Widget {
  /**
   * @param options
   */
  constructor(options) {
    super(options);
    /**
     * Manages the video input device.
     * @param deviceId device id.
     */
    this.setVideoInput = (deviceId) => {
      this._send("device", "setVideoInput", { deviceId });
    };
    /**
     * Manages the audio input device.
     * @param deviceId device id.
     */
    this.setAudioInput = (deviceId) => {
      this._send("device", "setAudioInput", { deviceId });
    };
    /**
     * Manages the audio output device.
     * @param deviceId device id.
     */
    this.setAudioOutput = (deviceId) => {
      this._send("device", "setAudioOutput", { deviceId });
    };
    /**
     * Manages my camera.
     * @param enable whether to turn on my camera.
     */
    this.setCamera = (enable) => {
      this._send("conference", enable === true ? "startCamera" : "stopCamera");
    };
    /**
     * Manages my microphone.
     * @param mute whether to mute my microphone.
     */
    this.setMute = (mute) => {
      this._send("conference", mute === true ? "mute" : "unmute");
    };
    /**
     * Manages incoming video.
     * @param enable whether to receive remote video streams.
     */
    this.setIncomingVideo = (enable) => {
      this._send(
        "conference",
        enable === true ? "enableIncomingVideo" : "disableIncomingVideo"
      );
    };
    /**
     * Sets the global audio output volume.
     * @param volume valid range: 0 - 1. (default: 1).
     */
    this.setVolume = (volume) => {
      if (typeof volume === "number") {
        if (volume < 0 || volume > 1) {
          throw new RangeError("volume");
        }
      } else {
        throw new TypeError();
      }
      this._send("conference", "setVolume", { volumn: volume });
    };
    /**
     * Mutes a remote participant, requires Moderator.
     * @param participantId participant id.
     */
    this.muteParticipant = (participantId) => {
      if (participantId > 0) {
        this._send("participant", "mute", { id: participantId });
      }
    };
    /**
     * Adjusts the audio output volume and/or stereo position of a remote participant.
     * @param participantId participant id.
     * @param settings audio settings.
     */
    this.adjustParticipantAudio = (participantId, settings) => {
      const { volume, pan } = settings;
      if (typeof volume !== "number" && typeof pan !== "number") {
        throw new TypeError();
      }
      if (typeof volume === "number") {
        if (volume < 0 || volume > 1) {
          throw new RangeError("volume");
        }
      }
      if (typeof pan === "number") {
        if (pan < -1 || pan > 1) {
          throw new RangeError("pan");
        }
      }
      if (participantId > 0) {
        this._send("participant", "adjustAudio", {
          id: participantId,
          volume,
          pan
        });
      }
    };
  }
};

// src/meeting.ts
var Meeting = class extends Room {
  constructor(options, roomId, meetingOptions = {}) {
    super(options);
    const { target: { autoClose } = {} } = options;
    const {
      name,
      skipJoin,
      mute: { mic: muteMic, camera: muteCamera } = {},
      observer,
      moderatorToken,
      resolution,
      view,
      tiles,
      audioLevel,
      stripLayout,
      autoView,
      afterCallUrl
    } = meetingOptions;
    this._load({
      redirect_url: `/conf/call/${roomId}`,
      name,
      skip_join: skipJoin,
      observer,
      moderator_token: moderatorToken,
      res: resolution,
      view,
      tiles,
      audio_level: audioLevel,
      strip_layout: stripLayout,
      auto_view: autoView,
      after_call_url: afterCallUrl,
      auto_close: autoClose,
      mute: [muteMic && "mic", muteCamera && "camera"].filter(Boolean).join(",") || void 0
    });
  }
};

// src/livestream.ts
var Livestream = class extends Widget {
  constructor(options, roomId, livestreamOptions) {
    super(options);
    this._load({
      ...livestreamOptions,
      redirect_url: `/livestream/${roomId}`
    });
  }
};
export {
  Dashboard,
  LayoutOption,
  Livestream,
  Meeting,
  MeetingAction,
  ScheduleAction,
  SearchContentType,
  Service
};
