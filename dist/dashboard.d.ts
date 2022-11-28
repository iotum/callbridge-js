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
    page?: Page);
    setPage(page: Page): void;
}
