import Widget from './widget';
/**
 * Callbridge Livesteam Viewer.
 */
export default class Livestream extends Widget {
    constructor(
    /**
     * Widget options
     */
    options, 
    /**
     * The room to stream
     */
    roomId, 
    /**
     * Livestream options
     */
    livestreamOptions) {
        super(options);
        this._load(Object.assign(Object.assign({}, livestreamOptions), { redirect_url: `/livestream/${roomId}` }));
    }
}
