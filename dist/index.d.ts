declare module '@iotum/callbridge-js/dashboard' {
  import { MeetingOptions } from '@iotum/callbridge-js/meeting';
  import Widget, { WidgetOptions } from '@iotum/callbridge-js/widget';
  /**
   * Dashboard service.
   */
  export enum Service {
      /** None */
      None = "",
      /** Team (Chat) */
      Team = "Team",
      /** Drive (Content Library) */
      Drive = "Drive",
      /** Contacts (Address Book) */
      Contacts = "Contacts",
      /** Meet (Meetings) */
      Meet = "Meet"
  }
  /**
   * Dashboard service layout options.
   */
  export enum LayoutOption {
      /** Full UI (default) */
      full = "full",
      /** Only the list (sidebar), applicable to Team and Drive */
      list = "list",
      /** Only the main content, applicable to Team and Drive */
      main = "main",
      /** No UI */
      none = "none"
  }
  /**
   * Dashboard service meeting action.
   */
  export enum MeetingAction {
      /** Load the meeting room inline (when widget container is an iframe). */
      auto = "auto",
      /** Load the meeting room in a new tab or window. */
      popup = "popup",
      /** Emit `NAVIGATE_TO_CALL` instead of loading the meeting room. */
      intercept = "intercept"
  }
  /**
   * Dashboard service options.
   */
  export type ServiceOptions = {
      /**
       * The initial path to load.
       */
      pathname?: string;
      /**
       * The service layout.
       */
      layout?: LayoutOption;
      /**
       * The meeting action.
       */
      meetingAction?: MeetingAction;
  };
  export type ChatRoom = {
      /** Room path, used for navigation. @see `Dashboard.load` */
      path: string;
      /** Room description. */
      description?: string;
      /** Accounts added to the room. */
      accounts: Array<{
          id: number;
          name: string;
          picture_url: string;
      }>;
  };
  /**
   * Callbridge Dashboard.
   */
  export default class Dashboard extends Widget<{
      'dashboard.READY': {
          existing?: boolean;
      };
      'dashboard.NAVIGATE': {
          service: Service;
          pathname: string;
          search: string;
          hash: string;
      };
      'dashboard.ROOM_LIST': {
          /** Rooms */
          rooms: {
              [roomId: string]: ChatRoom;
          };
          /** Channels */
          channels: {
              [channelId: string]: ChatRoom;
          };
      };
      'dashboard.UNREAD_MESSAGES': {
          rooms: {
              [/** Room Id */ id: string]: number;
          };
      };
      'dashboard.NAVIGATE_TO_CALL ': {
          accessCode: string;
          options: MeetingOptions;
      };
      /** Meeting widget is ready */
      'room.READY': void;
      /** Meeting widget is unloading */
      'room.UNLOAD': {
          reason: string;
      };
  }> {
      constructor(
      /**
       * Widget options
       */
      options: WidgetOptions, 
      /**
       * Optional, the page to load after logging in
       */
      service?: Service, 
      /**
       * Optional, service options.
       */
      serviceOptions?: ServiceOptions);
      /**
       * Loads the service.
       * @param service the service to load.
       * @param options Optional, service options.
       */
      load(service: Service, options?: ServiceOptions): void;
      /**
       * Loads a specific page from the session history.
       * @param delta The position in the history to which you want to move,
       * relative to the current page. A negative value moves backwards,
       * a positive value moves forwards.
       */
      go(delta: number): void;
  }

}
declare module '@iotum/callbridge-js/index' {
  export { type WidgetOptions } from '@iotum/callbridge-js/widget';
  export { default as Dashboard, Service, LayoutOption, MeetingAction, type ServiceOptions, type ChatRoom, } from '@iotum/callbridge-js/dashboard';
  export { type AudioSettings } from '@iotum/callbridge-js/room';
  export { default as Meeting, type MeetingOptions } from '@iotum/callbridge-js/meeting';
  export { default as Livestream, type LivestreamOptions } from '@iotum/callbridge-js/livestream';

}
declare module '@iotum/callbridge-js/livestream' {
  import Widget, { WidgetOptions } from '@iotum/callbridge-js/widget';
  /**
   * Livestream options.
   */
  export type LivestreamOptions = {
      /**
       * If provided, sets the viewer's name.
       */
      name?: string;
      /**
       * If provided, shows the chat panel to the right of the livestream player. If set to 'intercept', emits an event instead of sending the message.
       */
      chat?: boolean | 'intercept';
      /**
       * If set, hides the native media controls on the livestream player.
       */
      hideControls?: boolean;
  };
  /**
   * Callbridge Livesteam Viewer.
   */
  export default class Livestream extends Widget<{
      'livestream.READY': void;
      'livestream.LIVE_STREAM_INTERCEPT_CHAT': void;
  }> {
      constructor(
      /**
       * Widget options
       */
      options: WidgetOptions, 
      /**
       * The room to stream
       */
      roomId: string, 
      /**
       * Livestream options
       */
      livestreamOptions?: LivestreamOptions);
  }

}
declare module '@iotum/callbridge-js/meeting' {
  import Room from '@iotum/callbridge-js/room';
  import { WidgetOptions } from '@iotum/callbridge-js/widget';
  /**
   * Meeting options.
   */
  export type MeetingOptions = {
      /**
       * If provided, the user will not be prompted for name when entering meeting room.
       */
      name?: string;
      /**
       * If set, the user will skip the video/audio device selection dialog when entering meeting room, and use the system default or previously used devices.
       */
      skipJoin?: boolean;
      /**
       * If set, the user will enter the meeting room with the device turned off.
       */
      mute?: {
          /**
           * Microphone.
           */
          mic?: boolean;
          /**
           * Camera.
           */
          camera?: boolean;
      };
      /**
       * If set, the user will enter the meeting room with camera off and without a participant tile to others. They can still hear and be heard by others.
       */
      observer?: boolean;
      /**
       * If provided, the user will enter the meeting room as a moderator.
       */
      moderatorToken?: string;
      /**
       * If provided, sets the maximum sending video resolution.
       */
      resolution?: 180 | 360 | 720 | 1080;
      /**
       * If provided, sets the initial meeting view upon entering. The default view is gallery view.
       */
      view?: 'gallery' | 'bottom_speaker' | 'left_side_speaker';
      /**
       * If provided, sets the maximum on-screen tiles in the gallery view page.
       */
      tiles?: number;
      /**
       * If set, emits audio level events.
       */
      audioLevel?: boolean;
      /**
       * If set, renders the participants as a strip with fixed tile height and 6 tiles.
       */
      stripLayout?: boolean;
      /**
       * Mobile Only. If set, automatically switches speaker view to bottom vs. left based on the device orientation.
       */
      autoView?: boolean;
      /**
       * SSO Only. If provided, the user will be redirected to the provided URL after exiting a call.
       */
      afterCallUrl?: string;
  };
  /**
   * Callbridge Meeting Room.
   */
  export default class Meeting extends Room {
      constructor(
      /**
       * Widget options
       */
      options: WidgetOptions, 
      /**
       * The room to join
       */
      roomId: string, 
      /**
       * Meeting options
       */
      meetingOptions?: MeetingOptions);
  }

}
declare module '@iotum/callbridge-js/room' {
  import Widget, { WidgetOptions } from '@iotum/callbridge-js/widget';
  /**
   * Audio output settings.
   */
  export type AudioSettings = {
      /**
       * The output volume.
       * Valid range: 0 (silence) - 1 (max).
       * @default 1
       */
      pan?: number;
      /**
       * The stereo position.
       * Valid range: -1 (left) - 1 (right).
       * @default 0
       */
      volume?: number;
  };
  /**
   * Callbridge Room.
   */
  export default class Room extends Widget<{
      /** Meeting widget is ready */
      'room.READY': void;
      /** Meeting widget is unloading */
      'room.UNLOAD': {
          reason: string;
      };
      'device.DEVICE_LIST_CHANGED': {
          videoinput: Array<MediaDeviceInfo>;
          audioinput: Array<MediaDeviceInfo>;
          audiooutput: Array<MediaDeviceInfo>;
      };
      'device.DEVICE_IN_USE': {
          kind: 'audioinput' | 'audiooutput' | 'videoinput';
          deviceId: 'default';
      };
      'conference.CHANGE': {
          id: number;
          name: string;
          mode: string;
          roomSize: number;
          isActive: boolean;
          isRecording: boolean;
          isStreaming: boolean;
          isLocked: boolean;
          isSecured: boolean;
          incomingVideo: boolean;
      };
      'conference.SPEAKER': {
          id: number;
          speakerId: number;
      };
      'conference.CONFERENCE_CALL_EXIT': {
          reason: string;
      };
      'participant.CHANGE': {
          id: number;
          name: string;
          isCurrent: boolean;
          isOrganizer: boolean;
          isModerator: boolean;
          isObserver: boolean;
          isOnCall: boolean;
          isViewingOnly: boolean;
          isLeft: boolean;
          isBlocked: boolean;
          isMuted: boolean;
          isCameraOn: boolean;
          isPhone: boolean;
          isInternet: boolean;
          isJoining: boolean;
          isStreaming: boolean;
          handRaised: boolean;
      };
      'participant.AUDIO_LEVEL': {
          id: number;
          audioLevel: number;
      };
  }> {
      /**
       * @param options
       */
      constructor(options: WidgetOptions);
      /**
       * Manages the video input device.
       * @param deviceId device id.
       */
      setVideoInput: (deviceId: string) => void;
      /**
       * Manages the audio input device.
       * @param deviceId device id.
       */
      setAudioInput: (deviceId: string) => void;
      /**
       * Manages the audio output device.
       * @param deviceId device id.
       */
      setAudioOutput: (deviceId: string) => void;
      /**
       * Manages my camera.
       * @param enable whether to turn on my camera.
       */
      setCamera: (enable: boolean) => void;
      /**
       * Manages my microphone.
       * @param mute whether to mute my microphone.
       */
      setMute: (mute: boolean) => void;
      /**
       * Manages incoming video.
       * @param enable whether to receive remote video streams.
       */
      setIncomingVideo: (enable: boolean) => void;
      /**
       * Sets the global audio output volume.
       * @param volume valid range: 0 - 1. (default: 1).
       */
      setVolume: (volume: number) => void;
      /**
       * Mutes a remote participant, requires Moderator.
       * @param participantId participant id.
       */
      muteParticipant: (participantId: number) => void;
      /**
       * Adjusts the audio output volume and/or stereo position of a remote participant.
       * @param participantId participant id.
       * @param settings audio settings.
       */
      adjustParticipantAudio: (participantId: number, settings: AudioSettings) => void;
  }

}
declare module '@iotum/callbridge-js/widget' {
  /**
   * Widget options.
   */
  export type WidgetOptions = {
      /**
       * The container for the widget.
       * Supports attached or detached DOM element, document selector, or `window` (new tab).
       * If the element is detached, it will be set to invisible and attached to the main document.
       */
      container: Window | HTMLElement | string;
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
          /**
           * Whether to wait (up to 1.5 sec) for the existing widget.
           * Requires a matching "window target name".
           */
          checkExisting?: boolean;
      };
  };
  type EventMap = Record<string, any>;
  type EventKey<T extends EventMap> = string & keyof T;
  type Listener<T> = (params: T) => void;
  interface WidgetEventEmitter<T extends EventMap> {
      on<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
      off<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
      once<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
      emit<K extends EventKey<T>>(eventName: K, data?: T[K]): boolean;
      removeAllListeners<K extends EventKey<T>>(eventName: K, data: T[K]): this;
  }
  /**
   * Callbridge Widget.
   */
  export default class Widget<T extends EventMap | {
      'widget.LOAD': void;
      'widget.UNLOAD': void;
      'widget.ERROR': string;
  }> implements WidgetEventEmitter<T> {
      private emitter;
      private _attached;
      constructor({ container, domain, sso, target: { name, features, checkExisting }, }: WidgetOptions, autoLoad?: boolean);
      /**
       * Unloads the widget by removing the iframe or close the tab/window.
       */
      unload(): void;
      /**
       * Toggles the visibility of the widget on the page.
       *
       * Not available for pop-up.
       *
       * @param visible whether the widget should be visible
       */
      toggle(visible: boolean): void;
      /**
       * Whether the widget is ready.
       */
      get isReady(): boolean;
      /**
       * The widget instance.
       */
      get instance(): Window | HTMLIFrameElement | null;
      /**
       * The Window or WindowProxy instance of the widget.
       */
      get wnd(): Window | null;
      /**
       * Adds the `listener` function to the end of the listeners array for the event named `eventName`.
       */
      on<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
      /**
       * Removes the specified `listener` from the listener array for the event named `eventName`.
       */
      off<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
      /**
       * Adds a one-timelistener function for the event named eventName.
       * The next time eventName is triggered, this listener is removed and then invoked.
       */
      once<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
      /**
       * Synchronously calls each of the listeners registered for the event namedeventName,
       * in the order they were registered, passing the supplied arguments to each.
       * Returns true if the event had listeners, false otherwise.
       */
      emit<K extends EventKey<T>>(eventName: K, data?: T[K]): boolean;
      /**
       * Removes all listeners, or those of the specified `eventName`.
       *
       * It is bad practice to remove listeners added elsewhere in the code,
       * particularly when the instance was created by some other component or module.
       */
      removeAllListeners(event?: string): this;
  }
  export {};

}
declare module '@iotum/callbridge-js' {
  import main = require('@iotum/callbridge-js/src/index');
  export = main;
}