[@iotum/callbridge-js](../README.md) / Meeting

# Class: Meeting

Callbridge Meeting Room.

## Hierarchy

- [`default`](internal.default-1.md)

  ↳ **`Meeting`**

## Table of contents

### Constructors

- [constructor](Meeting.md#constructor)

### Accessors

- [instance](Meeting.md#instance)
- [isReady](Meeting.md#isready)
- [wnd](Meeting.md#wnd)

### Methods

- [adjustParticipantAudio](Meeting.md#adjustparticipantaudio)
- [emit](Meeting.md#emit)
- [muteParticipant](Meeting.md#muteparticipant)
- [off](Meeting.md#off)
- [on](Meeting.md#on)
- [once](Meeting.md#once)
- [removeAllListeners](Meeting.md#removealllisteners)
- [setAudioInput](Meeting.md#setaudioinput)
- [setAudioOutput](Meeting.md#setaudiooutput)
- [setCamera](Meeting.md#setcamera)
- [setIncomingVideo](Meeting.md#setincomingvideo)
- [setMute](Meeting.md#setmute)
- [setVideoInput](Meeting.md#setvideoinput)
- [setVolume](Meeting.md#setvolume)
- [toggle](Meeting.md#toggle)
- [unload](Meeting.md#unload)

## Constructors

### constructor

• **new Meeting**(`options`, `roomId`, `meetingOptions?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../README.md#widgetoptions) | Widget options |
| `roomId` | `string` | The room to join |
| `meetingOptions` | [`MeetingOptions`](../README.md#meetingoptions) | Meeting options |

#### Overrides

[default](internal.default-1.md).[constructor](internal.default-1.md#constructor)

#### Defined in

[meeting.ts:71](https://github.com/iotum/callbridge-js/blob/49e1851/src/meeting.ts#L71)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Room.instance

#### Defined in

[widget.ts:235](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L235)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Room.isReady

#### Defined in

[widget.ts:228](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L228)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Room.wnd

#### Defined in

[widget.ts:242](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L242)

## Methods

### adjustParticipantAudio

▸ **adjustParticipantAudio**(`participantId`, `settings`): `void`

Adjusts the audio output volume and/or stereo position of a remote participant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `participantId` | `number` | participant id. |
| `settings` | [`AudioSettings`](../README.md#audiosettings) | audio settings. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[adjustParticipantAudio](internal.default-1.md#adjustparticipantaudio)

#### Defined in

[room.ts:158](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L158)

___

### emit

▸ **emit**<`K`\>(`eventName`, `data?`): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | { `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }[`K`] |

#### Returns

`boolean`

#### Inherited from

[default](internal.default-1.md).[emit](internal.default-1.md#emit)

#### Defined in

[widget.ts:281](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L281)

___

### muteParticipant

▸ **muteParticipant**(`participantId`): `void`

Mutes a remote participant, requires Moderator.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `participantId` | `number` | participant id. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[muteParticipant](internal.default-1.md#muteparticipant)

#### Defined in

[room.ts:147](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L147)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`Meeting`](Meeting.md)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }[`K`]\> |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

[default](internal.default-1.md).[off](internal.default-1.md#off)

#### Defined in

[widget.ts:262](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L262)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`Meeting`](Meeting.md)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }[`K`]\> |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

[default](internal.default-1.md).[on](internal.default-1.md#on)

#### Defined in

[widget.ts:254](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L254)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`Meeting`](Meeting.md)

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }[`K`]\> |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

[default](internal.default-1.md).[once](internal.default-1.md#once)

#### Defined in

[widget.ts:271](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L271)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Meeting`](Meeting.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

[default](internal.default-1.md).[removeAllListeners](internal.default-1.md#removealllisteners)

#### Defined in

[widget.ts:291](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L291)

___

### setAudioInput

▸ **setAudioInput**(`deviceId`): `void`

Manages the audio input device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` | device id. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setAudioInput](internal.default-1.md#setaudioinput)

#### Defined in

[room.ts:89](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L89)

___

### setAudioOutput

▸ **setAudioOutput**(`deviceId`): `void`

Manages the audio output device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` | device id. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setAudioOutput](internal.default-1.md#setaudiooutput)

#### Defined in

[room.ts:97](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L97)

___

### setCamera

▸ **setCamera**(`enable`): `void`

Manages my camera.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | whether to turn on my camera. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setCamera](internal.default-1.md#setcamera)

#### Defined in

[room.ts:105](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L105)

___

### setIncomingVideo

▸ **setIncomingVideo**(`enable`): `void`

Manages incoming video.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | whether to receive remote video streams. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setIncomingVideo](internal.default-1.md#setincomingvideo)

#### Defined in

[room.ts:121](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L121)

___

### setMute

▸ **setMute**(`mute`): `void`

Manages my microphone.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mute` | `boolean` | whether to mute my microphone. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setMute](internal.default-1.md#setmute)

#### Defined in

[room.ts:113](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L113)

___

### setVideoInput

▸ **setVideoInput**(`deviceId`): `void`

Manages the video input device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceId` | `string` | device id. |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setVideoInput](internal.default-1.md#setvideoinput)

#### Defined in

[room.ts:81](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L81)

___

### setVolume

▸ **setVolume**(`volume`): `void`

Sets the global audio output volume.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `volume` | `number` | valid range: 0 - 1. (default: 1). |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[setVolume](internal.default-1.md#setvolume)

#### Defined in

[room.ts:132](https://github.com/iotum/callbridge-js/blob/49e1851/src/room.ts#L132)

___

### toggle

▸ **toggle**(`visible`): `void`

Toggles the visibility of the widget on the page.

Not available for pop-up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | whether the widget should be visible |

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[toggle](internal.default-1.md#toggle)

#### Defined in

[widget.ts:219](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L219)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[default](internal.default-1.md).[unload](internal.default-1.md#unload)

#### Defined in

[widget.ts:195](https://github.com/iotum/callbridge-js/blob/49e1851/src/widget.ts#L195)
