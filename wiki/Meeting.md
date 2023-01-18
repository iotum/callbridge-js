# Class: Meeting

Callbridge Meeting Room.

## Hierarchy

- `default`

  ↳ **`Meeting`**

## Table of contents

### Constructors

- [constructor](../wiki/Meeting#constructor)

### Accessors

- [instance](../wiki/Meeting#instance)
- [isReady](../wiki/Meeting#isready)
- [wnd](../wiki/Meeting#wnd)

### Methods

- [addListener](../wiki/Meeting#addlistener)
- [adjustParticipantAudio](../wiki/Meeting#adjustparticipantaudio)
- [muteParticipant](../wiki/Meeting#muteparticipant)
- [off](../wiki/Meeting#off)
- [on](../wiki/Meeting#on)
- [removeAllListeners](../wiki/Meeting#removealllisteners)
- [removeListener](../wiki/Meeting#removelistener)
- [setAudioInput](../wiki/Meeting#setaudioinput)
- [setAudioOutput](../wiki/Meeting#setaudiooutput)
- [setCamera](../wiki/Meeting#setcamera)
- [setIncomingVideo](../wiki/Meeting#setincomingvideo)
- [setMute](../wiki/Meeting#setmute)
- [setVideoInput](../wiki/Meeting#setvideoinput)
- [setVolume](../wiki/Meeting#setvolume)
- [unload](../wiki/Meeting#unload)

## Constructors

### constructor

• **new Meeting**(`options`, `roomId`, `meetingOptions?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../wiki/Exports#widgetoptions) | Widget options |
| `roomId` | `string` | The room to join |
| `meetingOptions` | [`MeetingOptions`](../wiki/Exports#meetingoptions) | Meeting options |

#### Overrides

Room.constructor

#### Defined in

[meeting.ts:71](https://github.com/iotum/callbridge-js/blob/52a0b50/src/meeting.ts#L71)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Room.instance

#### Defined in

[widget.ts:183](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L183)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Room.isReady

#### Defined in

[widget.ts:176](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L176)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Room.wnd

#### Defined in

[widget.ts:190](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L190)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Meeting`](../wiki/Meeting)

Alias for [on](../wiki/Meeting#on).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Meeting`](../wiki/Meeting)

#### Inherited from

Room.addListener

#### Defined in

[widget.ts:226](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L226)

___

### adjustParticipantAudio

▸ **adjustParticipantAudio**(`participantId`, `settings`): `void`

Adjusts the audio output volume and/or stereo position of a remote participant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `participantId` | `number` | participant id. |
| `settings` | [`AudioSettings`](../wiki/Exports#audiosettings) | audio settings. |

#### Returns

`void`

#### Inherited from

Room.adjustParticipantAudio

#### Defined in

[room.ts:113](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L113)

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

[room.ts:102](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L102)

___

### off

▸ **off**(`eventName`, `listener`): [`Meeting`](../wiki/Meeting)

Alias for [removeListener](../wiki/Meeting#removelistener).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Meeting`](../wiki/Meeting)

#### Inherited from

Room.off

#### Defined in

[widget.ts:214](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L214)

___

### on

▸ **on**(`eventName`, `listener`): [`Meeting`](../wiki/Meeting)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Meeting`](../wiki/Meeting)

#### Inherited from

Room.on

#### Defined in

[widget.ts:202](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L202)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Meeting`](../wiki/Meeting)

Removes all listeners, or those of the specified `eventName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Meeting`](../wiki/Meeting)

#### Inherited from

Room.removeAllListeners

#### Defined in

[widget.ts:250](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L250)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Meeting`](../wiki/Meeting)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Meeting`](../wiki/Meeting)

#### Inherited from

Room.removeListener

#### Defined in

[widget.ts:238](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L238)

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

[room.ts:44](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L44)

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

[room.ts:52](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L52)

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

[room.ts:60](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L60)

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

[room.ts:76](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L76)

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

[room.ts:68](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L68)

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

[room.ts:36](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L36)

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

[room.ts:87](https://github.com/iotum/callbridge-js/blob/52a0b50/src/room.ts#L87)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

Room.unload

#### Defined in

[widget.ts:160](https://github.com/iotum/callbridge-js/blob/52a0b50/src/widget.ts#L160)
