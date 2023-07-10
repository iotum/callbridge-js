[@iotum/callbridge-js](../README.md) / [\_internal](../modules/internal.md) / default

# Class: default

[_internal](../modules/internal.md).default

Callbridge Room.

## Hierarchy

- [`default`](internal.default.md)<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  } ; `room.READY`: `void`  }\>

  ↳ **`default`**

  ↳↳ [`Meeting`](Meeting.md)

## Table of contents

### Constructors

- [constructor](internal.default-1.md#constructor)

### Accessors

- [instance](internal.default-1.md#instance)
- [isReady](internal.default-1.md#isready)
- [wnd](internal.default-1.md#wnd)

### Methods

- [adjustParticipantAudio](internal.default-1.md#adjustparticipantaudio)
- [emit](internal.default-1.md#emit)
- [muteParticipant](internal.default-1.md#muteparticipant)
- [off](internal.default-1.md#off)
- [on](internal.default-1.md#on)
- [once](internal.default-1.md#once)
- [removeAllListeners](internal.default-1.md#removealllisteners)
- [setAudioInput](internal.default-1.md#setaudioinput)
- [setAudioOutput](internal.default-1.md#setaudiooutput)
- [setCamera](internal.default-1.md#setcamera)
- [setIncomingVideo](internal.default-1.md#setincomingvideo)
- [setMute](internal.default-1.md#setmute)
- [setVideoInput](internal.default-1.md#setvideoinput)
- [setVolume](internal.default-1.md#setvolume)
- [toggle](internal.default-1.md#toggle)
- [unload](internal.default-1.md#unload)

## Constructors

### constructor

• **new default**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`WidgetOptions`](../README.md#widgetoptions) |

#### Overrides

[default](internal.default.md).[constructor](internal.default.md#constructor)

#### Defined in

[room.ts:73](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L73)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Widget.instance

#### Defined in

[widget.ts:235](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L235)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Widget.isReady

#### Defined in

[widget.ts:228](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L228)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Widget.wnd

#### Defined in

[widget.ts:242](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L242)

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

#### Defined in

[room.ts:158](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L158)

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

[default](internal.default.md).[emit](internal.default.md#emit)

#### Defined in

[widget.ts:281](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L281)

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

#### Defined in

[room.ts:147](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L147)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`default`](internal.default-1.md)

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

[`default`](internal.default-1.md)

#### Inherited from

[default](internal.default.md).[off](internal.default.md#off)

#### Defined in

[widget.ts:262](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L262)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`default`](internal.default-1.md)

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

[`default`](internal.default-1.md)

#### Inherited from

[default](internal.default.md).[on](internal.default.md#on)

#### Defined in

[widget.ts:254](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L254)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`default`](internal.default-1.md)

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

[`default`](internal.default-1.md)

#### Inherited from

[default](internal.default.md).[once](internal.default.md#once)

#### Defined in

[widget.ts:271](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L271)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`default`](internal.default-1.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`default`](internal.default-1.md)

#### Inherited from

[default](internal.default.md).[removeAllListeners](internal.default.md#removealllisteners)

#### Defined in

[widget.ts:291](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L291)

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

#### Defined in

[room.ts:89](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L89)

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

#### Defined in

[room.ts:97](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L97)

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

#### Defined in

[room.ts:105](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L105)

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

#### Defined in

[room.ts:121](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L121)

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

#### Defined in

[room.ts:113](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L113)

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

#### Defined in

[room.ts:81](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L81)

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

#### Defined in

[room.ts:132](https://github.com/iotum/callbridge-js/blob/2066c52/src/room.ts#L132)

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

[default](internal.default.md).[toggle](internal.default.md#toggle)

#### Defined in

[widget.ts:219](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L219)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[default](internal.default.md).[unload](internal.default.md#unload)

#### Defined in

[widget.ts:195](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L195)
