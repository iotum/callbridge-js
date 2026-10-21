import Widget, { WidgetEvents, WidgetOptions } from './widget';

/**
 * Audio output settings of a remote participant.
 * @category Options
 */
export type AudioSettings = {
  /**
   * The stereo position.
   * Valid range: -1 (left) - 1 (right).
   * @defaultValue 0
   */
  pan?: number;
  /**
   * The output volume.
   * Valid range: 0 (silence) - 1 (max).
   * @defaultValue 1
   */
  volume?: number;
};

/**
 * Events emitted by the meeting room, in addition to {@link WidgetEvents}.
 *
 * @example
 * ```ts
 * meeting.on('participant.CHANGE', ({ id, name, isMuted }) => {
 *   console.log(`${name} (${id}) is ${isMuted ? 'muted' : 'unmuted'}`);
 * });
 * ```
 * @category Events
 */
export type RoomEvents = {
  /** The meeting room is ready, the device and conference methods can be used. */
  'room.READY': void;
  /** The meeting room is unloading. */
  'room.UNLOAD': { reason: string };
  /** The list of media devices is changed, e.g. a headset is plugged in. */
  'device.DEVICE_LIST_CHANGED': {
    /** Cameras. */
    videoinput: Array<MediaDeviceInfo>;
    /** Microphones. */
    audioinput: Array<MediaDeviceInfo>;
    /** Speakers. */
    audiooutput: Array<MediaDeviceInfo>;
  };
  /** A media device is selected for use. */
  'device.DEVICE_IN_USE': {
    /** The device kind. */
    kind: 'audioinput' | 'audiooutput' | 'videoinput';
    /** The device id. */
    deviceId: 'default';
  };
  /** The meeting state is changed. */
  'conference.CHANGE': {
    /** The meeting id. */
    id: number;
    /** The meeting name. */
    name: string;
    /** The meeting mode. */
    mode: string;
    /** The number of participants. */
    roomSize: number;
    isActive: boolean;
    isRecording: boolean;
    isStreaming: boolean;
    isLocked: boolean;
    isSecured: boolean;
    /** Whether remote video streams are received. @see {@link Room.setIncomingVideo} */
    incomingVideo: boolean;
  };
  /** The active speaker is changed. */
  'conference.SPEAKER': {
    /** The meeting id. */
    id: number;
    /** The participant id of the active speaker. */
    speakerId: number;
  };
  /** The current user has left the meeting. */
  'conference.CONFERENCE_CALL_EXIT': { reason: string };
  /** A participant joined, left, or their state is changed. */
  'participant.CHANGE': {
    /** The participant id. */
    id: number;
    /** The participant name. */
    name: string;
    /** Whether this is the current user. */
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
    /** Whether the participant joined by phone. */
    isPhone: boolean;
    /** Whether the participant joined by computer or app. */
    isInternet: boolean;
    isJoining: boolean;
    isStreaming: boolean;
    handRaised: boolean;
  };
  /**
   * The audio level of a participant is changed.
   * Requires {@link MeetingOptions.audioLevel}.
   */
  'participant.AUDIO_LEVEL': {
    /** The participant id. */
    id: number;
    /** The audio level, 0 (silence) - 1 (max). */
    audioLevel: number;
  };
};

/**
 * Base class of the meeting room widgets, with device and conference controls.
 *
 * Create a {@link Meeting} instead of using this class directly.
 * @category Widgets
 */
export default class Room extends Widget<WidgetEvents & RoomEvents> {
  /**
   * @param options Widget options.
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
