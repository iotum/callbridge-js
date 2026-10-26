/**
 * Widget options, common to every widget.
 *
 * @example
 * ```ts
 * const options: WidgetOptions = {
 *   domain: 'your-company.callbridge.com',
 *   sso: { token: 'sso-token', hostId: 12345 },
 *   container: '#widget',
 * };
 * ```
 * @category Options
 */
type WidgetOptions = {
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
/**
 * Events emitted by every widget.
 *
 * @example
 * ```ts
 * widget.on('widget.ERROR', (error) => console.error(error));
 * widget.on('widget.STORAGE_ACCESS_REQUIRED', ({ step }) => widget.toggle(true));
 * ```
 * @category Events
 */
type WidgetEvents = {
    /** The widget is loaded and ready for messaging. May be emitted again after a storage access reload. */
    'widget.LOAD': void;
    /** The widget is unloading. */
    'widget.UNLOAD': void;
    /** The widget failed to load. */
    'widget.ERROR': string;
    /**
     * Third-party cookies are blocked (e.g. Safari) and the user must grant storage access.
     * Make the widget visible (see `toggle`) and remove any loading overlay so the user can interact with it.
     * Not an error: `widget.STORAGE_ACCESS_GRANTED` or `widget.STORAGE_ACCESS_DENIED` follows.
     */
    'widget.STORAGE_ACCESS_REQUIRED': {
        /**
         * `request`: the user must click the widget button.
         * `interaction`: the user must click through the pop up window (or allow pop ups).
         * `retry`: the pop up completed, the user must click the widget button again.
         */
        step: 'request' | 'interaction' | 'retry';
    };
    /**
     * Storage access is granted. Authentication continues; wait for `widget.LOAD` before using the widget.
     * It is safe to hide the widget again.
     */
    'widget.STORAGE_ACCESS_GRANTED': void;
    /** The user (or the browser) denied storage access. The widget cannot sign in. */
    'widget.STORAGE_ACCESS_DENIED': void;
};
/**
 * A map of event names to event payloads.
 * @category Events
 */
type EventMap = Record<string, any>;
/**
 * An event name of the event map `T`.
 * @category Events
 */
type EventKey<T extends EventMap> = string & keyof T;
/**
 * An event listener, called with the event payload.
 * @category Events
 */
type Listener<T> = (params: T) => void;
interface WidgetEventEmitter<T extends EventMap> {
    on<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
    off<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
    once<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
    emit<K extends EventKey<T>>(eventName: K, data?: T[K]): boolean;
    removeAllListeners<K extends EventKey<T>>(eventName: K, data: T[K]): this;
}
/**
 * Base class of every Callbridge widget.
 *
 * Create a {@link Dashboard}, {@link Meeting} or {@link Livestream} instead of using this class directly.
 * The methods and {@link WidgetEvents} documented here are available on every widget.
 *
 * @example
 * ```ts
 * widget.on('widget.LOAD', () => console.log('loaded'));
 * widget.toggle(false); // hide the iframe
 * widget.unload(); // remove the iframe, or close the tab
 * ```
 * @typeParam T The events emitted by the widget.
 * @category Widgets
 */
declare class Widget<T extends EventMap | WidgetEvents> implements WidgetEventEmitter<T> {
    private emitter;
    private _attached;
    /**
     * @param options Widget options.
     * @param autoLoad Whether to load the widget immediately. Used by subclasses.
     * @throws {Error}
     *   - "Unable to locate the container element" when `container` cannot be found.
     *   - "Missing SSO parameters" when `sso` is set without both `token` and `hostId`.
     */
    constructor({ container, domain, sso, target: { name, features, checkExisting }, }: WidgetOptions, autoLoad?: boolean);
    /**
     * Unloads the widget by removing the iframe or close the tab/window.
     *
     * Call this when the host page or component is torn down (e.g. in a React effect cleanup).
     * The widget instance cannot be reused afterwards; create a new one instead.
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
     *
     * @example
     * ```ts
     * widget.on('widget.ERROR', (error) => console.error(error));
     * ```
     */
    on<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
    /**
     * Removes the specified `listener` from the listener array for the event named `eventName`.
     */
    off<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
    /**
     * Adds a one-time `listener` function for the event named `eventName`.
     * The next time `eventName` is triggered, this listener is removed and then invoked.
     */
    once<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
    /**
     * Synchronously calls each of the listeners registered for the event named `eventName`,
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

/**
 * Audio output settings of a remote participant.
 * @category Options
 */
type AudioSettings = {
    /**
     * The stereo position.
     * Valid range: -1 (left) - 1 (right).
     * @defaultValue 0
     */
    pan?: number;
    /**
     * The output volume.
     * Valid range: 0 (silence) - 1 (max).
     * @defaultValue 1
     */
    volume?: number;
};
/**
 * Events emitted by the meeting room, in addition to {@link WidgetEvents}.
 *
 * @example
 * ```ts
 * meeting.on('participant.CHANGE', ({ id, name, isMuted }) => {
 *   console.log(`${name} (${id}) is ${isMuted ? 'muted' : 'unmuted'}`);
 * });
 * ```
 * @category Events
 */
type RoomEvents = {
    /** The meeting room is ready, the device and conference methods can be used. */
    'room.READY': void;
    /** The meeting room is unloading. */
    'room.UNLOAD': {
        /** The reason, if any. */
        reason: string;
    };
    /** The list of media devices is changed, e.g. a headset is plugged in. */
    'device.DEVICE_LIST_CHANGED': {
        /** Cameras. */
        videoinput: Array<MediaDeviceInfo>;
        /** Microphones. */
        audioinput: Array<MediaDeviceInfo>;
        /** Speakers. */
        audiooutput: Array<MediaDeviceInfo>;
    };
    /** A media device is selected for use. */
    'device.DEVICE_IN_USE': {
        /** The device kind. */
        kind: 'audioinput' | 'audiooutput' | 'videoinput';
        /** The device id. */
        deviceId: 'default';
    };
    /** The meeting state is changed. */
    'conference.CHANGE': {
        /** The meeting id. */
        id: number;
        /** The meeting subject. */
        name: string;
        /** The meeting mode: conversation, Q&A or presentation. */
        mode: string;
        /** The number of participants. */
        roomSize: number;
        /** Whether the meeting is in progress. */
        isActive: boolean;
        /** Whether the meeting is being recorded. */
        isRecording: boolean;
        /** Whether the meeting is being livestreamed. */
        isStreaming: boolean;
        /** Whether the meeting is locked. */
        isLocked: boolean;
        /** Whether the meeting is secured. */
        isSecured: boolean;
        /** Whether remote video streams are received. @see {@link Room.setIncomingVideo} */
        incomingVideo: boolean;
    };
    /** The active speaker is changed. */
    'conference.SPEAKER': {
        /** The meeting id. */
        id: number;
        /** The participant id of the active speaker. */
        speakerId: number;
    };
    /** The current user has left the meeting. */
    'conference.CONFERENCE_CALL_EXIT': {
        /** The reason, if any. */
        reason: string;
    };
    /** A participant joined, left, or their state is changed. */
    'participant.CHANGE': {
        /** The participant id. */
        id: number;
        /** The participant name. */
        name: string;
        /** Whether this is the current user. */
        isCurrent: boolean;
        /** Whether the participant is the meeting organizer. */
        isOrganizer: boolean;
        /** Whether the participant is a moderator. */
        isModerator: boolean;
        /** Whether the participant joined as an observer. @see {@link MeetingOptions.observer} */
        isObserver: boolean;
        /** Whether the participant is connected to the call. */
        isOnCall: boolean;
        /** Whether the participant is watching without joining the call, e.g. via the livestream. */
        isViewingOnly: boolean;
        /** Whether the participant has left the meeting. */
        isLeft: boolean;
        /** Whether the participant is blocked from the meeting. */
        isBlocked: boolean;
        /** Whether the participant's microphone is muted. */
        isMuted: boolean;
        /** Whether the participant's camera is on. */
        isCameraOn: boolean;
        /** Whether the participant joined by phone. */
        isPhone: boolean;
        /** Whether the participant joined by computer or app. */
        isInternet: boolean;
        /** Whether the participant is joining the call. */
        isJoining: boolean;
        /** Whether the participant is watching the livestream. */
        isStreaming: boolean;
        /** Whether the participant's hand is raised. */
        handRaised: boolean;
    };
    /**
     * The audio level of a participant is changed.
     * Requires {@link MeetingOptions.audioLevel}.
     */
    'participant.AUDIO_LEVEL': {
        /** The participant id. */
        id: number;
        /** The audio level, 0 (silence) - 1 (max). */
        audioLevel: number;
    };
};
/**
 * Base class of the meeting room widgets, with device and conference controls.
 *
 * Create a {@link Meeting} instead of using this class directly.
 * @category Widgets
 */
declare class Room extends Widget<WidgetEvents & RoomEvents> {
    /**
     * Creates the room widget. Use {@link Meeting} instead.
     * @param options Widget options.
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

/**
 * Meeting options.
 * @category Options
 */
type MeetingOptions = {
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
 * Schedule options.
 * @see {@link DashboardEvents."dashboard.NAVIGATE_TO_SCHEDULE"}
 * @category Options
 */
type ScheduleOptions = {
    /** If `true`, create new meeting by copying settings from an existing meeting. */
    copyMeeting?: boolean;
};
/**
 * Callbridge Meeting Room.
 *
 * Joins a meeting room inside the container, or in a new tab.
 * Emits {@link WidgetEvents} and {@link RoomEvents}.
 *
 * @example
 * ```ts
 * import { Meeting } from '@iotum/callbridge-js';
 *
 * const meeting = new Meeting(
 *   {
 *     domain: 'your-company.callbridge.com',
 *     sso: { token: 'sso-token', hostId: 12345 },
 *     container: '#meeting',
 *   },
 *   '1234567', // access code
 *   { name: 'Jane Doe', skipJoin: true },
 * );
 *
 * meeting.on('room.READY', () => meeting.setMute(true));
 * meeting.on('room.UNLOAD', () => meeting.unload());
 * ```
 * @category Widgets
 */
declare class Meeting extends Room {
    /**
     * Creates the meeting widget, signs in, and joins the meeting room.
     */
    constructor(
    /**
     * Widget options
     */
    options: WidgetOptions, 
    /**
     * The room to join, i.e. the meeting access code.
     */
    roomId: string, 
    /**
     * Meeting options
     */
    meetingOptions?: MeetingOptions);
}

/**
 * Dashboard service.
 * @category Options
 */
declare enum Service {
    /** None */
    None = "",
    /** Search */
    Search = "Search",
    /** Team (Chat) */
    Team = "Team",
    /** Drive (Content Library) */
    Drive = "Drive",
    /** Contacts (Address Book) */
    Contacts = "Contacts",
    /** Meet (Meetings) */
    Meet = "Meet",
    /** Calls (Phone: recent calls, voicemails, contacts and call queues) */
    Calls = "Calls"
}
/**
 * Dashboard service layout options.
 * @category Options
 */
declare enum LayoutOption {
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
 * @category Options
 */
declare enum MeetingAction {
    /** Load the meeting room inline (when widget container is an iframe). */
    auto = "auto",
    /** Load the meeting room in a new tab or window. */
    popup = "popup",
    /** Emit `NAVIGATE_TO_CALL` instead of loading the meeting room. */
    intercept = "intercept"
}
/**
 * Dashboard service schedule action.
 * @category Options
 */
declare enum ScheduleAction {
    /** Load the schedule page normally. */
    auto = "auto",
    /** Emit `NAVIGATE_TO_SCHEDULE` instead of loading the schedule page. */
    intercept = "intercept"
}
/**
 * Dashboard service options.
 * @category Options
 */
type ServiceOptions = {
    /**
     * The initial path to load, relative to the service, e.g. a {@link ChatRoom.path}.
     */
    pathname?: string;
    /**
     * The service layout.
     * @defaultValue {@link LayoutOption.full}
     */
    layout?: LayoutOption;
    /**
     * What happens when the user starts or joins a meeting.
     * @defaultValue {@link MeetingAction.auto}
     */
    meetingAction?: MeetingAction;
    /**
     * What happens when the user schedules or edits a meeting.
     * @defaultValue {@link ScheduleAction.auto}
     */
    scheduleAction?: ScheduleAction;
    /**
     * The UI elements to be hidden.
     */
    hiddenElements?: number[];
    /**
     * The invited contact IDs. ("meeting schedule" only)
     */
    invitedContacts?: number[];
    /**
     * The invited host IDs. ("meeting schedule" only)
     */
    invitedHosts?: number[];
    /**
     * Enables the chat bot: Team chat messages starting with `/` (e.g. `/weather`) are not sent;
     * {@link DashboardEvents."dashboard.BOT_MESSAGE"} is emitted instead,
     * and you can answer with {@link Dashboard.replyToBotMessage}.
     *
     * Once enabled, it stays enabled until the browser tab is closed.
     *
     * See [Chat bot](../docs/guides/dashboard.md#chat-bot).
     */
    bot?: boolean;
};
/**
 * Chat room.
 * @see {@link DashboardEvents."dashboard.ROOM_LIST"}
 * @category Events
 */
type ChatRoom = {
    /** Room path, used for navigation. @see {@link Dashboard.load} */
    path: string;
    /** Room description. */
    description?: string;
    /** Accounts added to the room. */
    accounts: Array<{
        /** The account id. */
        id: number;
        /** The account name. */
        name: string;
        /** The account picture URL. */
        picture_url: string;
    }>;
};
/**
 * Search options.
 * @category Options
 */
type SearchOptions = {
    /** The search content type. Default `SearchContentType.Event` */
    contentType?: SearchContentType;
    /** The page number of the search result. Optional, default 1 */
    page?: number;
    /** The sorting order of the search result. Optional, default 'date' */
    order?: 'date' | 'relevance';
};
/**
 * Search content type.
 * @category Options
 */
declare enum SearchContentType {
    /** E.g. meeting and call event. */
    event = "event"
}
/**
 * Events emitted by the dashboard, in addition to {@link WidgetEvents}.
 *
 * @example
 * ```ts
 * dashboard.on('dashboard.UNREAD_MESSAGES', ({ rooms }) => {
 *   const total = Object.values(rooms).reduce((sum, count) => sum + count, 0);
 *   badge.textContent = String(total);
 * });
 * ```
 * @category Events
 */
type DashboardEvents = {
    /**
     * The dashboard is ready, {@link Dashboard.load} and the other methods can be used.
     */
    'dashboard.READY': {
        /** Whether an existing widget (see {@link WidgetOptions.target}`.checkExisting`) is reused. */
        existing?: boolean;
    };
    /** The dashboard is unloading. */
    'dashboard.UNLOAD': void;
    /** The user's session has expired; sign in again by creating a new widget. */
    'dashboard.SESSION_EXPIRED': void;
    /** The user navigated within the dashboard. */
    'dashboard.NAVIGATE': {
        /** The current service, if any. */
        service: Service;
        /** The path, relative to the service. */
        pathname: string;
        /** The query string. */
        search: string;
        /** The URL fragment. */
        hash: string;
    };
    /** The chat rooms are loaded or changed. ({@link Service.Team} only) */
    'dashboard.ROOM_LIST': {
        /** Rooms (direct messages and group chats), by room id. */
        rooms: {
            [roomId: string]: ChatRoom;
        };
        /** Channels, by channel id. */
        channels: {
            [channelId: string]: ChatRoom;
        };
    };
    /** The unread message counts are changed. ({@link Service.Team} only) */
    'dashboard.UNREAD_MESSAGES': {
        /** The number of unread messages, by room id. */
        rooms: {
            [/** Room Id */ id: string]: number;
        };
    };
    /**
     * The user started or joined a meeting.
     * Requires {@link ServiceOptions.meetingAction} to be {@link MeetingAction.intercept}.
     *
     * @example
     * ```ts
     * dashboard.on('dashboard.NAVIGATE_TO_CALL', ({ accessCode, options }) => {
     *   new Meeting(widgetOptions, accessCode, options);
     * });
     * ```
     */
    'dashboard.NAVIGATE_TO_CALL': {
        /** The meeting access code. */
        accessCode: string;
        /** The meeting options. */
        options: MeetingOptions;
    };
    /**
     * The user wants to schedule or edit a meeting.
     * Requires {@link ServiceOptions.scheduleAction} to be {@link ScheduleAction.intercept}.
     */
    'dashboard.NAVIGATE_TO_SCHEDULE': {
        /** The meeting id to edit or copy. */
        id?: number;
        /** The schedule options. */
        options: ScheduleOptions;
    };
    /** A search is started. ({@link Service.Search} only) */
    'dashboard.SEARCH_START': {
        /** The free-text part of the search query, in lower case. */
        query: string;
        /**
         * The `field:value` terms of the search query, e.g. `participant:alice` or `after:2026-01-01`.
         * Every value is an array, because a field can be repeated or have comma-separated values.
         */
        filters: {
            /** `subject:` terms. */
            subject?: string[];
            /** `description:` terms. */
            description?: string[];
            /** `participant:` terms. */
            participant?: string[];
            /** `transcript:` terms. */
            transcript?: string[];
            /** `filename:` terms (uploaded files). */
            filename?: string[];
            /** `before:` dates, as ISO 8601 strings. */
            before?: string[];
            /** `after:` dates, as ISO 8601 strings. */
            after?: string[];
            /** `sentiment:` terms. */
            sentiment?: Array<'positive' | 'negative'>;
            /** `day:` terms, e.g. `monday`. */
            day?: string[];
            /** `month:` terms, e.g. `january`. */
            month?: string[];
            /** `year:` terms. */
            year?: string[];
            /** `video:` terms (`true` or `false`). */
            video?: string[];
            /** `audio:` terms (`true` or `false`). */
            audio?: string[];
        };
        /** The page of the result. */
        page: number;
        /** The order of the result. */
        order: 'date' | 'relevance';
    };
    /** A search is completed or failed. ({@link Service.Search} only) */
    'dashboard.SEARCH_RESULT': {
        /**
         * The query of the search, as in {@link DashboardEvents."dashboard.SEARCH_START"}.
         * Not sent by older Callbridge versions.
         */
        query?: string;
        /** The search error. */
        error?: string;
        /** The search result. */
        result?: Array<{
            /** The type of the item. */
            contentType: SearchContentType;
            /** The id of the item */
            id: number;
            /** The result text with `<mark>` */
            highlight: Record<string, Array<string>>;
        }>;
    };
    /**
     * The user sent a chat bot command. ({@link Service.Team} with {@link ServiceOptions.bot} only)
     *
     * The message is not posted to the room.
     * Answer within 30 seconds with {@link Dashboard.replyToBotMessage}.
     */
    'dashboard.BOT_MESSAGE': {
        /** The message id; pass it to {@link Dashboard.replyToBotMessage}. */
        id: string;
        /** The message text (Markdown), starting with `/`. */
        message: string;
        /** The chat room id, as in {@link DashboardEvents."dashboard.ROOM_LIST"}. */
        room_id: number;
    };
    /** A reply sent with {@link Dashboard.replyToBotMessage} was not posted. */
    'dashboard.BOT_MESSAGE_REJECTED': {
        /** The message id. */
        id: string;
        /**
         * Why the reply was not posted:
         * - `INVALID ID`: no message has this id, or it was already answered.
         * - `INVALID SENDER`: a different user is now signed in.
         * - `OLD MESSAGE`: more than 30 seconds have passed since the message was sent.
         */
        reason: 'INVALID ID' | 'INVALID SENDER' | 'OLD MESSAGE';
    };
    /** A meeting room is loaded inline. See {@link MeetingAction.auto}. */
    'room.READY': RoomEvents['room.READY'];
    /**
     * The inline meeting room is unloading. See {@link MeetingAction.auto}.
     * The dashboard widget is unloaded as well; create a new {@link Dashboard} to show it again.
     */
    'room.UNLOAD': RoomEvents['room.UNLOAD'];
};
/**
 * Callbridge Dashboard: Team (chat), Drive, Contacts, Meet, Calls and Search.
 *
 * Emits {@link WidgetEvents} and {@link DashboardEvents}.
 *
 * @example
 * ```ts
 * import { Dashboard, Service, LayoutOption } from '@iotum/callbridge-js';
 *
 * const dashboard = new Dashboard(
 *   {
 *     domain: 'your-company.callbridge.com',
 *     sso: { token: 'sso-token', hostId: 12345 },
 *     container: '#dashboard',
 *   },
 *   Service.Team,
 *   { layout: LayoutOption.full },
 * );
 *
 * dashboard.on('dashboard.SESSION_EXPIRED', () => dashboard.unload());
 *
 * // switch to another service later
 * dashboard.load(Service.Drive);
 * ```
 * @category Widgets
 */
declare class Dashboard extends Widget<WidgetEvents & DashboardEvents> {
    /**
     * Creates the dashboard, signs in, and loads the `service` when the dashboard is ready.
     */
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
     * Search for meetings and calls.
     *
     * Only available when the dashboard is created with {@link Service.Search}.
     * Listen to {@link DashboardEvents."dashboard.SEARCH_RESULT"} for the result.
     *
     * @example
     * ```ts
     * const dashboard = new Dashboard(options, Service.Search);
     * dashboard.on('dashboard.SEARCH_RESULT', ({ result, error }) => render(result, error));
     * dashboard.once('dashboard.READY', () => dashboard.search('quarterly review'));
     * ```
     * @param query The search query.
     * @param options Optional, search options.
     * @throws {Error}
     *   - "Not implemented" when the service is not "Search".
     *   - "Nothing to search" when the query is empty.
     */
    search(query: string, options?: SearchOptions): void;
    /**
     * Loads the service.
     *
     * Wait for {@link DashboardEvents."dashboard.READY"} before calling this.
     *
     * @example
     * ```ts
     * // open a chat room in the main area only
     * dashboard.load(Service.Team, { pathname: room.path, layout: LayoutOption.main });
     * ```
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
    /**
     * Answers a chat bot command: posts `content` to the chat room of the
     * {@link DashboardEvents."dashboard.BOT_MESSAGE"} as the signed-in user.
     *
     * Requires {@link Service.Team} with {@link ServiceOptions.bot}.
     * Each message can be answered once, within 30 seconds;
     * otherwise {@link DashboardEvents."dashboard.BOT_MESSAGE_REJECTED"} is emitted.
     *
     * @example
     * ```ts
     * dashboard.on('dashboard.BOT_MESSAGE', async ({ id, message }) => {
     *   if (message.startsWith('/time')) {
     *     dashboard.replyToBotMessage(id, `It is ${new Date().toLocaleTimeString()}`);
     *   }
     * });
     * ```
     * @param id The {@link DashboardEvents."dashboard.BOT_MESSAGE"} id.
     * @param content The reply (Markdown).
     */
    replyToBotMessage(id: string, content: string): void;
    /**
     * Hides elements on the dashboard.
     * @param ids An array of Callbridge UI element IDs to hide, as used by the "hidden elements" account settings.
     */
    setHiddenElements(ids: number[]): void;
}

/**
 * Livestream options.
 * @category Options
 */
type LivestreamOptions = {
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
 * Events emitted by the livestream viewer, in addition to {@link WidgetEvents}.
 * @category Events
 */
type LivestreamEvents = {
    /** The livestream viewer is ready. */
    'livestream.READY': void;
    /**
     * The viewer tried to chat while {@link LivestreamOptions.chat} is `'intercept'`.
     * Show your own chat UI instead.
     */
    'livestream.LIVE_STREAM_INTERCEPT_CHAT': void;
};
/**
 * Callbridge Livestream Viewer.
 *
 * Emits {@link WidgetEvents} and {@link LivestreamEvents}.
 *
 * @example
 * ```ts
 * import { Livestream } from '@iotum/callbridge-js';
 *
 * const livestream = new Livestream(
 *   { domain: 'your-company.callbridge.com', container: '#livestream' },
 *   '1234567', // access code
 *   { name: 'Viewer', chat: true },
 * );
 * ```
 * @category Widgets
 */
declare class Livestream extends Widget<WidgetEvents & LivestreamEvents> {
    /**
     * Creates the livestream viewer and plays the livestream.
     */
    constructor(
    /**
     * Widget options
     */
    options: WidgetOptions, 
    /**
     * The room to stream, i.e. the meeting access code.
     */
    roomId: string, 
    /**
     * Livestream options
     */
    livestreamOptions?: LivestreamOptions);
}

export { Dashboard, LayoutOption, Livestream, Meeting, MeetingAction, Room, ScheduleAction, SearchContentType, Service, Widget };
export type { AudioSettings, ChatRoom, DashboardEvents, EventKey, EventMap, Listener, LivestreamEvents, LivestreamOptions, MeetingOptions, RoomEvents, ScheduleOptions, SearchOptions, ServiceOptions, WidgetEvents, WidgetOptions };
