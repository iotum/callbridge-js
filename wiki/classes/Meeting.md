[@iotum/callbridge-js](../README.md) / Meeting

# Class: Meeting

Callbridge Meeting Room.

## Hierarchy

- `default`

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

Room.constructor

#### Defined in

[meeting.ts:71](https://github.com/iotum/callbridge-js/blob/3192544/src/meeting.ts#L71)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Room.instance

#### Defined in

[widget.ts:203](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L203)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Room.isReady

#### Defined in

[widget.ts:196](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L196)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Room.wnd

#### Defined in

[widget.ts:210](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L210)

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

Room.adjustParticipantAudio

#### Defined in

[room.ts:157](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L157)

___

### emit

▸ **emit**<`K`\>(`eventName`, `data?`): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | { `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }[`K`] |

#### Returns

`boolean`

#### Inherited from

Room.emit

#### Defined in

[widget.ts:249](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L249)

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

Room.muteParticipant

#### Defined in

[room.ts:146](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L146)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`Meeting`](Meeting.md)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }[`K`]\> |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

Room.off

#### Defined in

[widget.ts:230](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L230)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`Meeting`](Meeting.md)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }[`K`]\> |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

Room.on

#### Defined in

[widget.ts:222](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L222)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`Meeting`](Meeting.md)

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `conference.CHANGE`: { `id`: `number` ; `incomingVideo`: `boolean` ; `isActive`: `boolean` ; `isLocked`: `boolean` ; `isRecording`: `boolean` ; `isSecured`: `boolean` ; `isStreaming`: `boolean` ; `mode`: `string` ; `name`: `string` ; `roomSize`: `number`  } ; `conference.CONFERENCE_CALL_EXIT`: { `reason`: `string`  } ; `conference.SPEAKER`: { `id`: `number` ; `speakerId`: `number`  } ; `device.DEVICE_IN_USE`: { `deviceId`: ``"default"`` ; `kind`: ``"audioinput"`` \| ``"audiooutput"`` \| ``"videoinput"``  } ; `device.DEVICE_LIST_CHANGED`: { `audioinput`: `MediaDeviceInfo`[] ; `audiooutput`: `MediaDeviceInfo`[] ; `videoinput`: `MediaDeviceInfo`[]  } ; `participant.AUDIO_LEVEL`: { `audioLevel`: `number` ; `id`: `number`  } ; `participant.CHANGE`: { `handRaised`: `boolean` ; `id`: `number` ; `isBlocked`: `boolean` ; `isCameraOn`: `boolean` ; `isCurrent`: `boolean` ; `isInternet`: `boolean` ; `isJoining`: `boolean` ; `isLeft`: `boolean` ; `isModerator`: `boolean` ; `isMuted`: `boolean` ; `isObserver`: `boolean` ; `isOnCall`: `boolean` ; `isOrganizer`: `boolean` ; `isPhone`: `boolean` ; `isStreaming`: `boolean` ; `isViewingOnly`: `boolean` ; `name`: `string`  }  }[`K`]\> |

#### Returns

[`Meeting`](Meeting.md)

#### Inherited from

Room.once

#### Defined in

[widget.ts:239](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L239)

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

Room.removeAllListeners

#### Defined in

[widget.ts:259](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L259)

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

Room.setAudioInput

#### Defined in

[room.ts:88](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L88)

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

Room.setAudioOutput

#### Defined in

[room.ts:96](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L96)

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

Room.setCamera

#### Defined in

[room.ts:104](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L104)

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

Room.setIncomingVideo

#### Defined in

[room.ts:120](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L120)

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

Room.setMute

#### Defined in

[room.ts:112](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L112)

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

Room.setVideoInput

#### Defined in

[room.ts:80](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L80)

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

Room.setVolume

#### Defined in

[room.ts:131](https://github.com/iotum/callbridge-js/blob/3192544/src/room.ts#L131)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

Room.unload

#### Defined in

[widget.ts:180](https://github.com/iotum/callbridge-js/blob/3192544/src/widget.ts#L180)
