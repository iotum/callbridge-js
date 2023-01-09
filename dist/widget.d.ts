/// <reference types="node" />
import { EventEmitter } from 'events';
/**
 * Widget options.
 */
export type WidgetOptions = {
    /**
     * The container for the widget. Supports attached or detached DOM element, document selector, or `window` (new tab).
     */
    container: Window | HTMLElement | string | null;
    /**
     * The Callbridge domain of the user.
     */
    domain: string;
    /**
     * Optional, Single Sign-On
     */
    sso?: {
        /**
         * Optional host-specific authorization token.
         */
        token?: string;
        /**
         * Optional account number of the user.
         */
        hostId?: number;
    };
    /**
     * Optional, options for `window.open` when `container` is `window`. @see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).
     */
    target?: {
        /**
         * The window target name.
         */
        name?: string;
        /**
         * The window features.
         */
        features?: string;
        /**
         * Whether to close the popup when the meeting is over.
         */
        autoClose?: boolean;
    };
};
/**
 * Callbridge Widget.
 */
export default class Widget extends EventEmitter {
    constructor({ container, domain, sso, target: { name, features } }: WidgetOptions, autoLoad?: boolean);
    /**
     * Unloads the widget by removing the iframe or close the tab/window.
     */
    unload(): void;
    /**
     * Whether the widget is ready.
     */
    get isReady(): boolean;
    /**
     * The widget instance.
     */
    get instance(): Window | HTMLIFrameElement | null;
    /**
     * The Window or WindowProxy instance of the widget.
     */
    get wnd(): Window | null;
    /**
     * Adds the `listener` function to the end of the listeners array for the event named `eventName`.
     */
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Alias for {@link removeListener}.
     */
    off(eventName: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Alias for {@link on}.
     */
    addListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Removes the specified `listener` from the listener array for the event named `eventName`.
     */
    removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this;
    /**
     * Removes all listeners, or those of the specified `eventName`.
     */
    removeAllListeners(event?: string | symbol | undefined): this;
}
