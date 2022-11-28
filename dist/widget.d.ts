/// <reference types="node" />
import { EventEmitter } from 'events';
export type WidgetOptions = {
    /** The container for the widget. Supports attached or detached DOM element, document selector, or window (new tab). */
    container: Window | HTMLElement | string | null;
    /** The Callbridge domain of the user. */
    domain: string;
    /** Optional, Single Sign-On */
    sso?: {
        /** Optional host-specific authorization token. */
        token?: string;
        /** Optional account number of the user. */
        hostId?: number;
    };
    /** Optional, @see https://developer.mozilla.org/en-US/docs/Web/API/Window/open. */
    target?: {
        /** The window target name. */
        name?: string;
        /** The window features. */
        features?: string;
    };
};
export default class Widget extends EventEmitter {
    constructor({ container, domain, sso, target: { name, features } }: WidgetOptions, autoLoad?: boolean);
    unload(): void;
    get ready(): boolean;
    get instance(): Window | HTMLIFrameElement | null;
    get wnd(): Window | null;
}
