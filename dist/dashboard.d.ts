import Widget, { WidgetOptions } from './widget';
/**
 * Dashboard service.
 */
export type Service = '' | 'Team' | 'Drive' | 'Contacts';
/**
 * Callbridge Dashboard.
 */
export default class Dashboard extends Widget {
    constructor(
    /**
     * Widget options
     */
    options: WidgetOptions, 
    /**
     * The page to load after logging in
     */
    service?: Service);
    /**
     * Loads the service.
     * @param service the service to load.
     */
    load(service: Service): void;
}
