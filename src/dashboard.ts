import { MeetingOptions, ScheduleOptions } from './meeting';
import { RoomEvents } from './room';
import Widget, { WidgetEvents, WidgetOptions } from './widget';

/**
 * Dashboard service.
 * @category Options
 */
export enum Service {
  /** None */
  None = '',
  /** Search */
  Search = 'Search',
  /** Team (Chat) */
  Team = 'Team',
  /** Drive (Content Library) */
  Drive = 'Drive',
  /** Contacts (Address Book) */
  Contacts = 'Contacts',
  /** Meet (Meetings) */
  Meet = 'Meet',
  /** Calls (Phone: recent calls, voicemails, contacts and call queues) */
  Calls = 'Calls',
}

/**
 * Dashboard service layout options.
 * @category Options
 */
export enum LayoutOption {
  /** Full UI (default) */
  full = 'full',
  /** Only the list (sidebar), applicable to Team and Drive */
  list = 'list',
  /** Only the main content, applicable to Team and Drive */
  main = 'main',
  /** No UI */
  none = 'none',
}

/**
 * Dashboard service meeting action.
 * @category Options
 */
export enum MeetingAction {
  /** Load the meeting room inline (when widget container is an iframe). */
  auto = 'auto',
  /** Load the meeting room in a new tab or window. */
  popup = 'popup',
  /** Emit `NAVIGATE_TO_CALL` instead of loading the meeting room. */
  intercept = 'intercept',
}

/**
 * Dashboard service schedule action.
 * @category Options
 */
export enum ScheduleAction {
  /** Load the schedule page normally. */
  auto = 'auto',
  /** Emit `NAVIGATE_TO_SCHEDULE` instead of loading the schedule page. */
  intercept = 'intercept',
}

/**
 * Dashboard service options.
 * @category Options
 */
export type ServiceOptions = {
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
export type ChatRoom = {
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
export type SearchOptions = {
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
export enum SearchContentType {
  /** E.g. meeting and call event. */
  event = 'event',
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
export type DashboardEvents = {
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
    rooms: { [/** Room Id */ id: string]: number };
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
export default class Dashboard extends Widget<WidgetEvents & DashboardEvents> {
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
    service = Service.None,
    /**
     * Optional, service options.
     */
    serviceOptions: ServiceOptions = {},
  ) {
    super(options);

    switch (service) {
      case Service.Team:
      case Service.Drive:
      case Service.Contacts:
      case Service.Meet:
      case Service.Calls:
      case Service.Search:
        this.once('dashboard.READY', () => this.load(service, serviceOptions));
        break;
    }

    switch (service) {
      case Service.Search:
        this.search = (
          query: string,
          {
            contentType = SearchContentType.event,
            ...opts
          }: SearchOptions = {},
        ) => {
          if (!query) {
            throw new Error('Nothing to search');
          }
          this._send('dashboard', 'search', {
            query,
            contentType,
            ...opts,
          });
        };
        break;
    }

    this._load({
      redirect_url: `/conf/loading`,
    });
  }

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
  search(query: string, options?: SearchOptions) {
    query;
    options;
    throw new Error('Not implemented');
  }

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
  load(service: Service, options: ServiceOptions = {}) {
    this._send('dashboard', 'load', { service, ...options });
  }

  /**
   * Loads a specific page from the session history.
   * @param delta The position in the history to which you want to move,
   * relative to the current page. A negative value moves backwards,
   * a positive value moves forwards.
   */
  go(delta: number) {
    this._send('dashboard', 'go', { delta });
  }

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
  replyToBotMessage(id: string, content: string) {
    this._send('dashboard', 'botMessage', { id, content });
  }

  /**
   * Hides elements on the dashboard.
   * @param ids An array of Callbridge UI element IDs to hide, as used by the "hidden elements" account settings.
   */
  setHiddenElements(ids: number[]) {
    this._send('dashboard', 'setHiddenElements', { ids });
  }
}
