import Widget, { WidgetOptions } from './widget';

/**
 * Dashboard page.
 */
export type Page = '' | 'chat' | 'drive' | 'contacts' | 'meetings';

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
    page: Page = '',
  ) {
    super(options);

    this.load({
      redirect_url: `/conf/${page || ''}`,
    });
  }

  /**
   * Loads the page.
   * @param page the page to load.
   */
  loadPage(page: Page) {
    this._send('portal', 'loadPage', { page });
  }
}
