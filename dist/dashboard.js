"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widget_1 = __importDefault(require("./widget"));
/**
 * Callbridge Dashboard.
 */
class Dashboard extends widget_1.default {
    constructor(
    /**
     * Widget options
     */
    options, 
    /**
     * The page to load after logging in
     */
    page = '') {
        super(options);
        this.load({
            redirect_url: `/conf/${page || ''}`,
        });
    }
    /**
     * Loads the page.
     * @param page the page to load.
     */
    loadPage(page) {
        this._send('portal', 'loadPage', { page });
    }
}
exports.default = Dashboard;
