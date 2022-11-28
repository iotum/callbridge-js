import Widget, { WidgetOptions } from './widget';

export type Page = '' | 'chat' | 'drive' | 'contacts' | 'meetings';

/**
 * Callbridge Dashboard.
 */
export default class Dashboard extends Widget {
  constructor(
    /** Widget options */
    options: WidgetOptions,
    /** The page to load after logging in */
    page: Page = '',
  ) {
    super(options);

    this.load({
      redirect_url: `/conf/${page || ''}`,
    });
  }

  setPage(page: Page) {
    this._send('portal', 'setPage', { page });
  }
}
