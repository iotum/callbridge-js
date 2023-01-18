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
    service: Service = '',
  ) {
    super(options);

    switch (service) {
      case 'Team':
      case 'Drive':
      case 'Contacts':
        this.once('dashboard.ready', () => this.load(service));
        break;
    }

    this._load({
      redirect_url: `/conf/loading`,
    });
  }

  /**
   * Loads the service.
   * @param service the service to load.
   */
  load(service: Service) {
    this._send('dashboard', 'load', { service });
  }
}
