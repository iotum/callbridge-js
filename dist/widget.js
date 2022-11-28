"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const FramePermissionsPolicy = [
    'camera',
    'microphone',
    'autoplay',
    'fullscreen',
    'display-capture',
].join(';');
function createInstance(container, url, { target, features }) {
    if (container instanceof Window) {
        return container.open(url, target, features);
    }
    const instance = document.createElement('iframe');
    Object.assign(instance.style, {
        border: 'none',
        width: '100%',
        height: '100%',
    });
    container.appendChild(Object.assign(instance, {
        allow: FramePermissionsPolicy,
        src: url,
    }));
    return instance;
}
function setParams(url, params) {
    for (const opt of Object.keys(params)) {
        const val = params[opt];
        if (val !== undefined && val !== null) {
            url.searchParams.set(opt, String(val));
        }
    }
    // Always enable events
    url.searchParams.set('events', 'true');
}
class Widget extends events_1.EventEmitter {
    constructor({ container, domain, sso, target: { name, features } = {} }, autoLoad = false) {
        super();
        /** @internal */
        this._container = null;
        /** @internal */
        this._instance = null;
        /** @internal */
        this._ready = false;
        /** @internal */
        this.load = (params) => {
            if (!this._container || this._instance) {
                return;
            }
            if (typeof params.redirect_url === 'string') {
                // update params against redirect_url (instead of the iframe url)
                const redirectUrl = new URL(params.redirect_url, this._url);
                setParams(redirectUrl, Object.assign(Object.assign({}, params), { redirect_url: null }));
                const isSSO = this._url.pathname === '/auth';
                if (isSSO) {
                    setParams(this._url, {
                        redirect_url: `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`,
                    });
                }
                else {
                    this._url = redirectUrl;
                }
            }
            else {
                setParams(this._url, params);
            }
            this._instance = createInstance(this._container, this._url.href, {
                target: this._target,
                features: this._features,
            });
            if (this._instance) {
                this._instance.onload = () => {
                    this._ready = true;
                    this.emit(`widget.LOAD`);
                };
                this._instance.onerror = (ev) => {
                    this._error = ev;
                    this.emit('widget.ERROR', ev instanceof Error ? ev.message : ev);
                };
            }
            else {
                this.emit('widget.ERROR', 'Unable to open');
            }
        };
        /** @internal */
        this._processEvent = ({ data, source }) => {
            if (this._ready) {
                if (source === this.wnd) {
                    const { type, event } = data, extra = __rest(data, ["type", "event"]);
                    this.emit(`${type}.${event}`, extra);
                }
            }
        };
        /** @internal */
        this._send = (type, action, data = {}) => {
            var _a;
            (_a = this.wnd) === null || _a === void 0 ? void 0 : _a.postMessage(Object.assign({ type,
                action }, data), '*');
        };
        if (container) {
            if (typeof container === 'string') {
                this._container = document.querySelector(container);
            }
            else {
                this._container = container;
            }
        }
        if (!this._container) {
            throw new Error('Unable to locate the container element');
        }
        this._url = new URL(`https://${domain}`);
        if (sso) {
            const { hostId, token } = sso;
            if (!hostId || !token) {
                throw new Error('Missing SSO parameters');
            }
            this._url.pathname = '/auth';
            this._url.searchParams.set('host_id', String(hostId));
            this._url.searchParams.set('login_token_public_key', token);
        }
        window.addEventListener('message', this._processEvent);
        this._target = name;
        this._features = features;
        if (autoLoad) {
            this.load({ redirect_url: '/page_to_see' });
        }
    }
    unload() {
        window.removeEventListener('message', this._processEvent);
        if (this._instance) {
            if (this._instance instanceof Window) {
                this._instance.close();
            }
            else {
                this._instance.remove();
            }
            this._instance = null;
        }
        this._ready = false;
    }
    get ready() {
        return this._ready;
    }
    get instance() {
        return this._instance;
    }
    get wnd() {
        if (this._instance) {
            return this._instance instanceof Window
                ? this._instance
                : this._instance.contentWindow;
        }
        return null;
    }
}
exports.default = Widget;
