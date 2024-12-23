import { MeetingOptions, ScheduleOptions } from './meeting';
import Widget, { WidgetOptions } from './widget';

/**
 * Dashboard service.
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
}

/**
 * Dashboard service layout options.
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
 */
export enum ScheduleAction {
  /** Load the schedule page normally. */
  auto = 'auto',
  /** Emit `NAVIGATE_TO_SCHEDULE` instead of loading the schedule page. */
  intercept = 'intercept',
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

  /**
   * The schedule action.
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
};

/**
 * Chat room.
 */
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
 * Search options.
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
 */
export enum SearchContentType {
  /** E.g. meeting and call event. */
  event = 'event',
}

/**
 * Callbridge Dashboard.
 */
export default class Dashboard extends Widget<{
  /** Dashboard widget is ready */
  'dashboard.READY': {
    existing?: boolean;
  };
  /** Dashboard widget is unloading */
  'dashboard.UNLOAD': void;
  /** Dashboard widget is signed out */
  'dashboard.SESSION_EXPIRED': void;
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
    rooms: { [/** Room Id */ id: string]: number };
  };
  'dashboard.NAVIGATE_TO_CALL': {
    accessCode: string;
    options: MeetingOptions;
  };
  'dashboard.NAVIGATE_TO_SCHEDULE': {
    /** The meeting id to edit or copy. */
    id?: number;
    options: ScheduleOptions;
  };
  'dashboard.SEARCH_START': {
    /** The search query. */
    query: string;
    /** The page of the result. */
    page: number;
    /** The order of the result. */
    order: 'date' | 'relevance';
  };
  'dashboard.SEARCH_RESULT': {
    /** The search query. */
    query: string;
    /** The search error. */
    error?: string;
    /** The search result. */
    result?: Array<{
      /** The type of the item. */
      contentType: SearchContentType;
      /** The id of the item */
      id: number;
      /** The result text with <mark> */
      highlight: Record<string, Array<string>>;
    }>;
  };
  /** Meeting widget is ready */
  'room.READY': void;
  /** Meeting widget is unloading */
  'room.UNLOAD': { reason: string };
}> {
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
   * Search for thing.
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
   * Hides elements on the dashboard.
   * @param ids An array of element IDs to hide.
   */
  setHiddenElements(ids: number[]) {
    this._send('dashboard', 'setHiddenElements', { ids });
  }
}
