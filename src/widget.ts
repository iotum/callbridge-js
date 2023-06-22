import { EventEmitter } from 'events';

/**
 * Widget options.
 */
export type WidgetOptions = {
  /**
   * The container for the widget.
   * Supports attached or detached DOM element, document selector, or `window` (new tab).
   * If the element is detached, it will be set to invisible and attached to the main document.
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

type SearchParams = {
  redirect_url: string | null;
  [opt: string]: string | number | boolean | null | undefined;
};

const FramePermissionsPolicy = [
  'camera',
  'microphone',
  'autoplay',
  'fullscreen',
  'display-capture',
].join(';');

function createInstance(
  container: Window | HTMLElement,
  url: string,
  { target, features }: { target?: string; features?: string },
) {
  if (container instanceof Window) {
    return container.open(url, target, features);
  }

  const attached = document.body.contains(container);
  if (!attached) {
    // nothing will happen if the iframe is not attached to the document
    document.body.appendChild(container);
  }

  const instance = document.createElement('iframe');
  Object.assign(instance.style, {
    ...getStyles(attached),
    border: 'none',
    width: '100%',
    height: '100%',
  } as CSSStyleDeclaration);

  container.appendChild(
    Object.assign(instance, {
      allow: FramePermissionsPolicy,
      src: url,
    } as HTMLIFrameElement),
  );

  return instance;
}

function getStyles(visible: boolean) {
  return { display: visible ? 'block' : 'none' } as CSSStyleDeclaration;
}

function setParams(url: URL, params: SearchParams) {
  for (const opt of Object.keys(params)) {
    const val = params[opt];
    if (val !== undefined && val !== null) {
      url.searchParams.set(opt, String(val));
    }
  }

  // Always enable events
  url.searchParams.set('events', 'true');
}

type EventMap = Record<string, any>;
type EventKey<T extends EventMap> = string & keyof T;
type Listener<T> = (params: T) => void;

interface WidgetEventEmitter<T extends EventMap> {
  on<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
  off<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
  once<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this;
  emit<K extends EventKey<T>>(eventName: K, data?: T[K]): boolean;
  removeAllListeners<K extends EventKey<T>>(eventName: K, data: T[K]): this;
}

/**
 * Callbridge Widget.
 */
export default class Widget<
  T extends
    | EventMap
    | {
        'widget.LOAD': void;
        'widget.UNLOAD': void;
        'widget.ERROR': string;
      },
> implements WidgetEventEmitter<T>
{
  private emitter = new EventEmitter();

  /** @internal */
  protected _container: Window | HTMLElement | null = null;
  /** @internal */
  protected _instance: Window | HTMLIFrameElement | null = null;
  /** @internal */
  protected _url: URL;
  /** @internal */
  protected _target?: string;
  /** @internal */
  protected _features?: string;

  /** @internal */
  protected _ready = false;
  /** @internal */
  protected _error: Event | string | undefined;

  constructor(
    { container, domain, sso, target: { name, features } = {} }: WidgetOptions,
    autoLoad = false,
  ) {
    if (container) {
      if (typeof container === 'string') {
        this._container = document.querySelector(container) as HTMLElement;
      } else {
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
      this._load({ redirect_url: '/page_to_see' });
    }
  }

  /**
   * Unloads the widget by removing the iframe or close the tab/window.
   */
  unload() {
    window.removeEventListener('message', this._processEvent);
    if (this._instance) {
      if (this._instance instanceof Element) {
        if (this._instance.style.display === 'none') {
          // detach from DOM
          this._instance.parentElement?.remove();
        }
        this._instance.remove();
      } else {
        this._instance.close();
      }
      this._instance = null;
    }
    this._ready = false;
  }

  /**
   * Toggles the visibility of the widget on the page.
   *
   * Not available for pop-up.
   *
   * @param visible whether the widget should be visible
   */
  toggle(visible: boolean) {
    if (this._instance instanceof HTMLElement) {
      Object.assign(this._instance.style, getStyles(visible));
    }
  }

  /**
   * Whether the widget is ready.
   */
  get isReady() {
    return this._ready;
  }

  /**
   * The widget instance.
   */
  get instance() {
    return this._instance;
  }

  /**
   * The Window or WindowProxy instance of the widget.
   */
  get wnd() {
    if (this._instance) {
      return this._instance instanceof Element
        ? this._instance.contentWindow
        : this._instance;
    }
    return null;
  }

  /**
   * Adds the `listener` function to the end of the listeners array for the event named `eventName`.
   */
  on<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this {
    this.emitter.on(eventName, listener);
    return this;
  }

  /**
   * Removes the specified `listener` from the listener array for the event named `eventName`.
   */
  off<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this {
    this.emitter.off(eventName, listener);
    return this;
  }

  /**
   * Adds a one-timelistener function for the event named eventName.
   * The next time eventName is triggered, this listener is removed and then invoked.
   */
  once<K extends EventKey<T>>(eventName: K, listener: Listener<T[K]>): this {
    this.emitter.once(eventName, listener);
    return this;
  }

  /**
   * Synchronously calls each of the listeners registered for the event namedeventName,
   * in the order they were registered, passing the supplied arguments to each.
   * Returns true if the event had listeners, false otherwise.
   */
  emit<K extends EventKey<T>>(eventName: K, data?: T[K]): boolean {
    return this.emitter.emit(eventName, data);
  }

  /**
   * Removes all listeners, or those of the specified `eventName`.
   *
   * It is bad practice to remove listeners added elsewhere in the code,
   * particularly when the instance was created by some other component or module.
   */
  removeAllListeners(event?: string | symbol | undefined): this {
    this.emitter.removeAllListeners(event);
    return this;
  }

  /** @internal */
  protected _load = (params: SearchParams) => {
    if (!this._container || this._instance) {
      return;
    }

    if (typeof params.redirect_url === 'string') {
      // update params against redirect_url (instead of the iframe url)
      const redirectUrl = new URL(params.redirect_url, this._url);
      setParams(redirectUrl, {
        ...params,
        redirect_url: null,
      });

      const isSSO = this._url.pathname === '/auth';
      if (isSSO) {
        setParams(this._url, {
          redirect_url: `${redirectUrl.pathname}${redirectUrl.search}${redirectUrl.hash}`,
        });
      } else {
        this._url = redirectUrl;
      }
    } else {
      setParams(this._url, params);
    }

    this._instance = createInstance(this._container, this._url.href, {
      target: this._target,
      features: this._features,
    });

    if (this._instance) {
      this._instance.onerror = (ev) => {
        this._error = ev;
        this.emit('widget.ERROR', ev instanceof Error ? ev.message : ev);
      };
    } else {
      this.emit('widget.ERROR', 'Unable to open');
    }
  };

  /** @internal */
  protected _processEvent = ({ data, source }: MessageEvent) => {
    if (source === this.wnd) {
      const { type, event, ...extra } = data;
      if (type && event) {
        switch (event) {
          case 'READY':
            // the bi-di messaging channel is ready
            this._ready = true;
            this.emit('widget.LOAD');
            break;

          case 'UNLOAD':
            this.unload();
            this.emit('widget.UNLOAD');
            break;

          default:
            break;
        }
        this.emit(`${type}.${event}` as any, extra);
      }
    }
  };

  /** @internal */
  protected _send = (type: string, action: string, data: object = {}) => {
    this.wnd?.postMessage(
      {
        type,
        action,
        ...data,
      },
      '*',
    );
  };
}
