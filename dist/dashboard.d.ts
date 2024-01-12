import Widget, { WidgetOptions } from './widget';
/**
 * Dashboard service.
 */
export declare enum Service {
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
export declare enum LayoutOption {
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
        rooms: {
            [/** Room Id */ id: string]: number;
        };
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
