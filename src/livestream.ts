import Widget, { WidgetEvents, WidgetOptions } from './widget';

/**
 * Livestream options.
 * @category Options
 */
export type LivestreamOptions = {
  /**
   * If provided, sets the viewer's name.
   */
  name?: string;
  /**
   * If provided, shows the chat panel to the right of the livestream player. If set to 'intercept', emits an event instead of sending the message.
   */
  chat?: boolean | 'intercept';
  /**
   * If set, hides the native media controls on the livestream player.
   */
  hideControls?: boolean;
};

/**
 * Events emitted by the livestream viewer, in addition to {@link WidgetEvents}.
 * @category Events
 */
export type LivestreamEvents = {
  /** The livestream viewer is ready. */
  'livestream.READY': void;
  /**
   * The viewer tried to chat while {@link LivestreamOptions.chat} is `'intercept'`.
   * Show your own chat UI instead.
   */
  'livestream.LIVE_STREAM_INTERCEPT_CHAT': void;
};

/**
 * Callbridge Livestream Viewer.
 *
 * Emits {@link WidgetEvents} and {@link LivestreamEvents}.
 *
 * @example
 * ```ts
 * import { Livestream } from '@iotum/callbridge-js';
 *
 * const livestream = new Livestream(
 *   { domain: 'your-company.callbridge.com', container: '#livestream' },
 *   '1234567', // access code
 *   { name: 'Viewer', chat: true },
 * );
 * ```
 * @category Widgets
 */
export default class Livestream extends Widget<
  WidgetEvents & LivestreamEvents
> {
  constructor(
    /**
     * Widget options
     */
    options: WidgetOptions,
    /**
     * The room to stream, i.e. the meeting access code.
     */
    roomId: string,
    /**
     * Livestream options
     */
    livestreamOptions?: LivestreamOptions,
  ) {
    super(options);

    this._load({
      ...livestreamOptions,
      redirect_url: `/livestream/${roomId}`,
    });
  }
}
