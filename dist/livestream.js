"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_1 = __importDefault(require("./room"));
/**
 * Callbridge Meeting Room.
 */
class Livestream extends room_1.default {
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
exports.default = Livestream;
