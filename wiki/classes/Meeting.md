[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / Meeting

# Class: Meeting

Callbridge Meeting Room.

## Extends

- [`default`](../internal/classes/default.md)

## Constructors

### new Meeting()

> **new Meeting**(`options`, `roomId`, `meetingOptions`): [`Meeting`](Meeting.md)

#### Parameters

##### options

[`WidgetOptions`](../type-aliases/WidgetOptions.md)

Widget options

##### roomId

`string`

The room to join

##### meetingOptions

[`MeetingOptions`](../type-aliases/MeetingOptions.md) = `{}`

Meeting options

#### Returns

[`Meeting`](Meeting.md)

#### Overrides

[`default`](../internal/classes/default.md).[`constructor`](../internal/classes/default.md#constructors-1)

#### Defined in

[meeting.ts:77](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/meeting.ts#L77)

## Accessors

### instance

#### Get Signature

> **get** **instance**(): `null` \| `Window` \| `HTMLIFrameElement`

The widget instance.

##### Returns

`null` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

[`default`](../internal/classes/default.md).[`instance`](../internal/classes/default.md#instance-2)

#### Defined in

[widget.ts:296](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L296)

***

### isReady

#### Get Signature

> **get** **isReady**(): `boolean`

Whether the widget is ready.

##### Returns

`boolean`

#### Inherited from

[`default`](../internal/classes/default.md).[`isReady`](../internal/classes/default.md#isready-2)

#### Defined in

[widget.ts:289](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L289)

***

### wnd

#### Get Signature

> **get** **wnd**(): `null` \| `Window`

The Window or WindowProxy instance of the widget.

##### Returns

`null` \| `Window`

#### Inherited from

[`default`](../internal/classes/default.md).[`wnd`](../internal/classes/default.md#wnd-2)

#### Defined in

[widget.ts:303](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L303)

## Methods

### adjustParticipantAudio()

> **adjustParticipantAudio**(`participantId`, `settings`): `void`

Adjusts the audio output volume and/or stereo position of a remote participant.

#### Parameters

##### participantId

`number`

participant id.

##### settings

[`AudioSettings`](../type-aliases/AudioSettings.md)

audio settings.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`adjustParticipantAudio`](../internal/classes/default.md#adjustparticipantaudio)

#### Defined in

[room.ts:163](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L163)

***

### emit()

> **emit**\<`K`\>(`eventName`, `data`?): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\>

#### Parameters

##### eventName

`K`

##### data?

[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\[`K`\]

#### Returns

`boolean`

#### Inherited from

[`default`](../internal/classes/default.md).[`emit`](../internal/classes/default.md#emit-1)

#### Defined in

[widget.ts:342](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L342)

***

### muteParticipant()

> **muteParticipant**(`participantId`): `void`

Mutes a remote participant, requires Moderator.

#### Parameters

##### participantId

`number`

participant id.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`muteParticipant`](../internal/classes/default.md#muteparticipant)

#### Defined in

[room.ts:152](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L152)

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../internal/type-aliases/Listener.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`off`](../internal/classes/default.md#off-1)

#### Defined in

[widget.ts:323](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L323)

***

### on()

> **on**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../internal/type-aliases/Listener.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`on`](../internal/classes/default.md#on-1)

#### Defined in

[widget.ts:315](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L315)

***

### once()

> **once**\<`K`\>(`eventName`, `listener`): `this`

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../internal/type-aliases/Listener.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`once`](../internal/classes/default.md#once-1)

#### Defined in

[widget.ts:332](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L332)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

##### event?

`string`

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`removeAllListeners`](../internal/classes/default.md#removealllisteners-2)

#### Defined in

[widget.ts:352](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L352)

***

### setAudioInput()

> **setAudioInput**(`deviceId`): `void`

Manages the audio input device.

#### Parameters

##### deviceId

`string`

device id.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setAudioInput`](../internal/classes/default.md#setaudioinput)

#### Defined in

[room.ts:94](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L94)

***

### setAudioOutput()

> **setAudioOutput**(`deviceId`): `void`

Manages the audio output device.

#### Parameters

##### deviceId

`string`

device id.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setAudioOutput`](../internal/classes/default.md#setaudiooutput)

#### Defined in

[room.ts:102](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L102)

***

### setCamera()

> **setCamera**(`enable`): `void`

Manages my camera.

#### Parameters

##### enable

`boolean`

whether to turn on my camera.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setCamera`](../internal/classes/default.md#setcamera)

#### Defined in

[room.ts:110](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L110)

***

### setIncomingVideo()

> **setIncomingVideo**(`enable`): `void`

Manages incoming video.

#### Parameters

##### enable

`boolean`

whether to receive remote video streams.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setIncomingVideo`](../internal/classes/default.md#setincomingvideo)

#### Defined in

[room.ts:126](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L126)

***

### setMute()

> **setMute**(`mute`): `void`

Manages my microphone.

#### Parameters

##### mute

`boolean`

whether to mute my microphone.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setMute`](../internal/classes/default.md#setmute)

#### Defined in

[room.ts:118](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L118)

***

### setVideoInput()

> **setVideoInput**(`deviceId`): `void`

Manages the video input device.

#### Parameters

##### deviceId

`string`

device id.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setVideoInput`](../internal/classes/default.md#setvideoinput)

#### Defined in

[room.ts:86](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L86)

***

### setVolume()

> **setVolume**(`volume`): `void`

Sets the global audio output volume.

#### Parameters

##### volume

`number`

valid range: 0 - 1. (default: 1).

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`setVolume`](../internal/classes/default.md#setvolume)

#### Defined in

[room.ts:137](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/room.ts#L137)

***

### toggle()

> **toggle**(`visible`): `void`

Toggles the visibility of the widget on the page.

Not available for pop-up.

#### Parameters

##### visible

`boolean`

whether the widget should be visible

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`toggle`](../internal/classes/default.md#toggle-2)

#### Defined in

[widget.ts:280](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L280)

***

### unload()

> **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`unload`](../internal/classes/default.md#unload-2)

#### Defined in

[widget.ts:252](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L252)
