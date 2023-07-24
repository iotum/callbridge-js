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
    rooms: { [/** Room Id */ id: string]: number };
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
}
