---
title: Joining a meeting
category: Guides
---

# Joining a meeting

The {@link Meeting} joins a meeting room with the meeting access code.

```ts
import { Meeting } from '@iotum/callbridge-js';

const meeting = new Meeting(options, '1234567', {
  name: 'Jane Doe',
  skipJoin: true,
  mute: { mic: true },
});
```

See {@link MeetingOptions} for all options, e.g. the initial view, the video resolution, joining as an observer,
or as a moderator with a moderator token.

## Meeting and participant state

```ts
meeting.on('conference.CHANGE', ({ roomSize, isRecording }) => {
  console.log(`${roomSize} participants, recording: ${isRecording}`);
});

meeting.on('participant.CHANGE', ({ id, name, isCurrent, isMuted, isLeft }) => {
  // update your participant list
});

meeting.on('conference.SPEAKER', ({ speakerId }) => highlight(speakerId));
```

Set {@link MeetingOptions.audioLevel} to receive `participant.AUDIO_LEVEL` events.

`conference.CONFERENCE_CALL_EXIT` is emitted when the user leaves the meeting,
and `room.UNLOAD` when the meeting room unloads; the widget is then unloaded.

See {@link RoomEvents} for every event.

## Controls

Call these after `room.READY`:

| Method                              | Does                                                    |
| ----------------------------------- | ------------------------------------------------------- |
| {@link Room.setMute}                | Mutes or unmutes the microphone.                        |
| {@link Room.setCamera}              | Turns the camera on or off.                             |
| {@link Room.setIncomingVideo}       | Receives or stops remote video, e.g. to save bandwidth. |
| {@link Room.setVolume}              | Sets the output volume, 0 - 1.                          |
| {@link Room.muteParticipant}        | Mutes a participant. Requires moderator.                |
| {@link Room.adjustParticipantAudio} | Sets the volume and stereo position of a participant.   |

## Devices

The meeting room emits the available devices, and the device in use. Show your own device picker with them:

```ts
meeting.on(
  'device.DEVICE_LIST_CHANGED',
  ({ audioinput, audiooutput, videoinput }) => {
    renderDevicePicker({ audioinput, audiooutput, videoinput });
  },
);

meeting.on('device.DEVICE_IN_USE', ({ kind, deviceId }) =>
  select(kind, deviceId),
);

// when the user picks a device
meeting.setAudioInput(deviceId);
meeting.setAudioOutput(deviceId);
meeting.setVideoInput(deviceId);
```

See the [Devices in Meeting sample](https://github.com/iotum/iotum-samples/tree/main/src/pages/meeting-devices).

## New tab or window

Set `container` to `window` to open the meeting in a new tab, and {@link WidgetOptions.target} to control it:

```ts
const meeting = new Meeting(
  {
    domain: 'your-company.callbridge.com',
    container: window,
    target: {
      name: 'callbridge-meeting', // window name
      features: 'width=1280,height=720', // see window.open()
      autoClose: true, // close the window when the meeting ends
    },
  },
  '1234567',
);
```

Create the widget from a user action, e.g. a click, so the browser does not block the pop-up;
`widget.ERROR` is emitted when it is blocked.

`target.checkExisting` reuses an open widget with the same window `name`, e.g. after the user reloads your page,
instead of opening a new one.
