import Widget, { WidgetOptions } from './widget';
/**
 * Audio output settings.
 */
export type AudioSettings = {
    /**
     * The output volume.
     * Valid range: 0 (silence) - 1 (max).
     * @default 1
     */
    pan?: number;
    /**
     * The stereo position.
     * Valid range: -1 (left) - 1 (right).
     * @default 0
     */
    volume?: number;
};
/**
 * Callbridge Room.
 */
export default class Room extends Widget {
    /**
     * @param options
     */
    constructor(options: WidgetOptions);
    /**
     * Manages the video input device.
     * @param deviceId device id.
     */
    setVideoInput: (deviceId: string) => void;
    /**
     * Manages the audio input device.
     * @param deviceId device id.
     */
    setAudioInput: (deviceId: string) => void;
    /**
     * Manages the audio output device.
     * @param deviceId device id.
     */
    setAudioOutput: (deviceId: string) => void;
    /**
     * Manages my camera.
     * @param enable whether to turn on my camera.
     */
    setCamera: (enable: boolean) => void;
    /**
     * Manages my microphone.
     * @param mute whether to mute my microphone.
     */
    setMute: (mute: boolean) => void;
    /**
     * Manages incoming video.
     * @param enable whether to receive remote video streams.
     */
    setIncomingVideo: (enable: boolean) => void;
    /**
     * Sets the global audio output volume.
     * @param volume valid range: 0 - 1. (default: 1).
     */
    setVolume: (volume: number) => void;
    /**
     * Mutes a remote participant, requires Moderator.
     * @param participantId participant id.
     */
    muteParticipant: (participantId: number) => void;
    /**
     * Adjusts the audio output volume and/or stereo position of a remote participant.
     * @param participantId participant id.
     * @param settings audio settings.
     */
    adjustParticipantAudio: (participantId: number, settings: AudioSettings) => void;
}
