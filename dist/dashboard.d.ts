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
    page?: Page);
    /**
     * Loads the page.
     * @param page the page to load.
     */
    loadPage(page: Page): void;
}
