import { EventEmitter } from 'events';

/**
 * Widget options.
 */
export type WidgetOptions = {
  /**
   * The container for the widget. Supports attached or detached DOM element, document selector, or `window` (new tab).
   */
  container: Window | HTMLElement | string | null;
  /**
   * The Callbridge domain of the user.
   */
  domain: string;
  /**
   * Optional, Single Sign-On
   */
  sso?: {
    /**
     * Optional host-specific authorization token.
     */
    token?: string;
    /**
     * Optional account number of the user.
     */
    hostId?: number;
  };
  /**
   * Optional, options for `window.open` when `container` is `window`. @see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).
   */
  target?: {
    /**
     * The window target name.
     */
    name?: string;
    /**
     * The window features.
     */
    features?: string;
    /**
     * Whether to close the popup when the meeting is over.
     */
    autoClose?: boolean;
  };
};

type SearchParams = {
  redirect_url: string | null;
  [opt: string]: string | number | boolean | null | undefined;
};

const FramePermissionsPolicy = [
  'camera',
  'microphone',
  'autoplay',
  'fullscreen',
  'display-capture',
].join(';');

function createInstance(
  container: Window | Element,
  url: string,
  { target, features }: { target?: string; features?: string },
) {
  if (container instanceof Window) {
    return container.open(url, target, features);
  }

  const instance = document.createElement('iframe');
  Object.assign(instance.style, {
    border: 'none',
    width: '100%',
    height: '100%',
  });
  container.appendChild(
    Object.assign(instance, {
      allow: FramePermissionsPolicy,
      src: url,
    }),
  );

  return instance;
}

function setParams(url: URL, params: SearchParams) {
  for (const opt of Object.keys(params)) {
    const val = params[opt];
    if (val !== undefined && val !== null) {
      url.searchParams.set(opt, String(val));
    }
  }

  // Always enable events
  url.searchParams.set('events', 'true');
}

/**
 * Callbridge Widget.
 */
export default class Widget extends EventEmitter {
  /** @internal */
  protected _container: Window | Element | null = null;
  /** @internal */
  protected _instance: Window | HTMLIFrameElement | null = null;
  /** @internal */
  protected _url: URL;
  /** @internal */
  protected _target?: string;
  /** @internal */
  protected _features?: string;

  /** @internal */
  protected _ready = false;
  /** @internal */
  protected _error: Event | string | undefined;

  constructor(
    { container, domain, sso, target: { name, features } = {} }: WidgetOptions,
    autoLoad = false,
  ) {
    super();

    if (container) {
      if (typeof container === 'string') {
        this._container = document.querySelector(container);
      } else {
        this._container = container;
      }
    }

    if (!this._container) {
      throw new Error('Unable to locate the container element');
    }

    this._url = new URL(`https://${domain}`);
    if (sso) {
      const { hostId, token } = sso;
      if (!hostId || !token) {
        throw new Error('Missing SSO parameters');
      }

      this._url.pathname = '/auth';
      this._url.searchParams.set('host_id', String(hostId));
      this._url.searchParams.set('login_token_public_key', token);
    }

    window.addEventListener('message', this._processEvent);

    this._target = name;
    this._features = features;

    if (autoLoad) {
      this._load({ redirect_url: '/page_to_see' });
    }
  }

  /**
   * Unloads the widget by removing the iframe or close the tab/window.
   */
  unload() {
    window.removeEventListener('message', this._processEvent);
    if (this._instance) {
      if (this._instance instanceof Element) {
        this._instance.remove();
      } else {
        this._instance.close();
      }
      this._instance = null;
    }
    this._ready = false;
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
      return this._instance instanceof Element
        ? this._instance.contentWindow
        : this._instance;
    }
    return null;
  }

  /**
   * Adds the `listener` function to the end of the listeners array for the event named `eventName`.
   */
  override on(
    eventName: string | symbol,
    // eslint-disable-next-line no-unused-vars
    listener: (...args: any[]) => void,
  ): this {
    super.on(eventName, listener);
    return this;
  }

  /**
   * Alias for {@link removeListener}.
   */
  override off(
    eventName: string | symbol,
    // eslint-disable-next-line no-unused-vars
    listener: (...args: any[]) => void,
  ): this {
    super.off(eventName, listener);
    return this;
  }

  /**
   * Alias for {@link on}.
   */
  override addListener(
    eventName: string | symbol,
    // eslint-disable-next-line no-unused-vars
    listener: (...args: any[]) => void,
  ): this {
    super.addListener(eventName, listener);
    return this;
  }

  /**
   * Removes the specified `listener` from the listener array for the event named `eventName`.
   */
  override removeListener(
    eventName: string | symbol,
    // eslint-disable-next-line no-unused-vars
    listener: (...args: any[]) => void,
  ): this {
    super.removeListener(eventName, listener);
    return this;
  }

  /**
   * Removes all listeners, or those of the specified `eventName`.
   */
  override removeAllListeners(event?: string | symbol | undefined): this {
    super.removeAllListeners(event);
    return this;
  }

  /** @internal */
  protected _load = (params: SearchParams) => {
    if (!this._container || this._instance) {
      return;
    }

    if (typeof params.redirect_url === 'string') {
      // update params against redirect_url (instead of the iframe url)
      const redirectUrl = new URL(params.redirect_url, this._url);
      setParams(redirectUrl, {
        ...params,
        redirect_url: null,
      });

      const isSSO = this._url.pathname === '/auth';
      if (isSSO) {
        setParams(this._url, {
          redirect_url: `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`,
        });
      } else {
        this._url = redirectUrl;
      }
    } else {
      setParams(this._url, params);
    }

    this._instance = createInstance(this._container, this._url.href, {
      target: this._target,
      features: this._features,
    });

    if (this._instance) {
      this._instance.onload = () => {
        this._ready = true;
        this.emit(`widget.LOAD`);
      };
      this._instance.onerror = (ev) => {
        this._error = ev;
        this.emit('widget.ERROR', ev instanceof Error ? ev.message : ev);
      };
    } else {
      this.emit('widget.ERROR', 'Unable to open');
    }
  };

  /** @internal */
  protected _processEvent = ({ data, source }: MessageEvent) => {
    if (this._ready) {
      if (source === this.wnd) {
        const { type, event, ...extra } = data;
        this.emit(`${type}.${event}`, extra);
      }
    }
  };

  /** @internal */
  protected _send = (type: string, action: string, data: object = {}) => {
    this.wnd?.postMessage(
      {
        type,
        action,
        ...data,
      },
      '*',
    );
  };
}
