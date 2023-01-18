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
    service = '') {
        super(options);
        switch (service) {
            case 'Team':
            case 'Drive':
            case 'Contacts':
                this.once('dashboard.READY', () => this.load(service));
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
    load(service) {
        this._send('dashboard', 'load', { service });
    }
}
exports.default = Dashboard;
