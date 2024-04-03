import Widget from './widget';
/**
 * Dashboard service.
 */
export var Service;
(function (Service) {
    /** None */
    Service["None"] = "";
    /** Team (Chat) */
    Service["Team"] = "Team";
    /** Drive (Content Library) */
    Service["Drive"] = "Drive";
    /** Contacts (Address Book) */
    Service["Contacts"] = "Contacts";
    /** Meet (Meetings) */
    Service["Meet"] = "Meet";
})(Service || (Service = {}));
/**
 * Dashboard service layout options.
 */
export var LayoutOption;
(function (LayoutOption) {
    /** Full UI (default) */
    LayoutOption["full"] = "full";
    /** Only the list (sidebar), applicable to Team and Drive */
    LayoutOption["list"] = "list";
    /** Only the main content, applicable to Team and Drive */
    LayoutOption["main"] = "main";
    /** No UI */
    LayoutOption["none"] = "none";
})(LayoutOption || (LayoutOption = {}));
/**
 * Callbridge Dashboard.
 */
export default class Dashboard extends Widget {
    constructor(
    /**
     * Widget options
     */
    options, 
    /**
     * Optional, the page to load after logging in
     */
    service = Service.None, 
    /**
     * Optional, service options.
     */
    serviceOptions = {}) {
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
    load(service, options = {}) {
        this._send('dashboard', 'load', Object.assign({ service }, options));
    }
    /**
     * Loads a specific page from the session history.
     * @param delta The position in the history to which you want to move,
     * relative to the current page. A negative value moves backwards,
     * a positive value moves forwards.
     */
    go(delta) {
        this._send('dashboard', 'go', { delta });
    }
}
