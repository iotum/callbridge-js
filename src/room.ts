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
export default class Room extends Widget<{
  'device.DEVICE_LIST_CHANGED': {
    videoinput: Array<MediaDeviceInfo>;
    audioinput: Array<MediaDeviceInfo>;
    audiooutput: Array<MediaDeviceInfo>;
  };
  'device.DEVICE_IN_USE': {
    kind: 'audioinput' | 'audiooutput' | 'videoinput';
    deviceId: 'default';
  };
  'conference.CHANGE': {
    id: number;
    name: string;
    mode: string;
    roomSize: number;
    isActive: boolean;
    isRecording: boolean;
    isStreaming: boolean;
    isLocked: boolean;
    isSecured: boolean;
    incomingVideo: boolean;
  };
  'conference.SPEAKER': { id: number; speakerId: number };
  'conference.CONFERENCE_CALL_EXIT': { reason: string };
  'participant.CHANGE': {
    id: number;
    name: string;
    isCurrent: boolean;
    isOrganizer: boolean;
    isModerator: boolean;
    isObserver: boolean;
    isOnCall: boolean;
    isViewingOnly: boolean;
    isLeft: boolean;
    isBlocked: boolean;
    isMuted: boolean;
    isCameraOn: boolean;
    isPhone: boolean;
    isInternet: boolean;
    isJoining: boolean;
    isStreaming: boolean;
    handRaised: boolean;
  };
  'participant.AUDIO_LEVEL': { id: number; audioLevel: number };
}> {
  /**
   * @param options
   */
  constructor(options: WidgetOptions) {
    super(options);
  }

  /**
   * Manages the video input device.
   * @param deviceId device id.
   */
  setVideoInput = (deviceId: string) => {
    this._send('device', 'setVideoInput', { deviceId });
  };

  /**
   * Manages the audio input device.
   * @param deviceId device id.
   */
  setAudioInput = (deviceId: string) => {
    this._send('device', 'setAudioInput', { deviceId });
  };

  /**
   * Manages the audio output device.
   * @param deviceId device id.
   */
  setAudioOutput = (deviceId: string) => {
    this._send('device', 'setAudioOutput', { deviceId });
  };

  /**
   * Manages my camera.
   * @param enable whether to turn on my camera.
   */
  setCamera = (enable: boolean) => {
    this._send('conference', enable === true ? 'startCamera' : 'stopCamera');
  };

  /**
   * Manages my microphone.
   * @param mute whether to mute my microphone.
   */
  setMute = (mute: boolean) => {
    this._send('conference', mute === true ? 'mute' : 'unmute');
  };

  /**
   * Manages incoming video.
   * @param enable whether to receive remote video streams.
   */
  setIncomingVideo = (enable: boolean) => {
    this._send(
      'conference',
      enable === true ? 'enableIncomingVideo' : 'disableIncomingVideo',
    );
  };

  /**
   * Sets the global audio output volume.
   * @param volume valid range: 0 - 1. (default: 1).
   */
  setVolume = (volume: number) => {
    if (typeof volume === 'number') {
      if (volume < 0 || volume > 1) {
        throw new RangeError('volume');
      }
    } else {
      throw new TypeError();
    }
    this._send('conference', 'setVolume', { volumn: volume });
  };

  /**
   * Mutes a remote participant, requires Moderator.
   * @param participantId participant id.
   */
  muteParticipant = (participantId: number) => {
    if (participantId > 0) {
      this._send('participant', 'mute', { id: participantId });
    }
  };

  /**
   * Adjusts the audio output volume and/or stereo position of a remote participant.
   * @param participantId participant id.
   * @param settings audio settings.
   */
  adjustParticipantAudio = (participantId: number, settings: AudioSettings) => {
    const { volume, pan } = settings;
    if (typeof volume !== 'number' && typeof pan !== 'number') {
      throw new TypeError();
    }
    if (typeof volume === 'number') {
      if (volume < 0 || volume > 1) {
        throw new RangeError('volume');
      }
    }
    if (typeof pan === 'number') {
      if (pan < -1 || pan > 1) {
        throw new RangeError('pan');
      }
    }
    if (participantId > 0) {
      this._send('participant', 'adjustAudio', {
        id: participantId,
        volume,
        pan,
      });
    }
  };
}
