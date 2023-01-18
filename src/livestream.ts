import Widget, { WidgetOptions } from './widget';

/**
 * Livestream options.
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
 * Callbridge Livesteam Viewer.
 */
export default class Livestream extends Widget<{
  'livestream.LIVE_STREAM_INTERCEPT_CHAT': null;
}> {
  constructor(
    /**
     * Widget options
     */
    options: WidgetOptions,
    /**
     * The room to stream
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
