import { MeetingOptions, ScheduleOptions } from './meeting';
import Widget, { WidgetOptions } from './widget';

/**
 * Dashboard service.
 */
export enum Service {
  /** None */
  None = '',
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
        this.once('dashboard.READY', () => this.load(service, serviceOptions));
        break;
    }

    this._load({
      redirect_url: `/conf/loading`,
    });
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
