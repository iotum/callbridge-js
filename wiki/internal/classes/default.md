[**@iotum/callbridge-js**](../../README.md)

***

[@iotum/callbridge-js](../../README.md) / [\_internal](../README.md) / default

# Class: default

Callbridge Room.

## Extends

- [`default`](default.md)\<\{ `conference.CHANGE`: \{ `id`: `number`; `incomingVideo`: `boolean`; `isActive`: `boolean`; `isLocked`: `boolean`; `isRecording`: `boolean`; `isSecured`: `boolean`; `isStreaming`: `boolean`; `mode`: `string`; `name`: `string`; `roomSize`: `number`; \}; `conference.CONFERENCE_CALL_EXIT`: \{ `reason`: `string`; \}; `conference.SPEAKER`: \{ `id`: `number`; `speakerId`: `number`; \}; `device.DEVICE_IN_USE`: \{ `deviceId`: `"default"`; `kind`: `"audioinput"` \| `"audiooutput"` \| `"videoinput"`; \}; `device.DEVICE_LIST_CHANGED`: \{ `audioinput`: `MediaDeviceInfo`[]; `audiooutput`: `MediaDeviceInfo`[]; `videoinput`: `MediaDeviceInfo`[]; \}; `participant.AUDIO_LEVEL`: \{ `audioLevel`: `number`; `id`: `number`; \}; `participant.CHANGE`: \{ `handRaised`: `boolean`; `id`: `number`; `isBlocked`: `boolean`; `isCameraOn`: `boolean`; `isCurrent`: `boolean`; `isInternet`: `boolean`; `isJoining`: `boolean`; `isLeft`: `boolean`; `isModerator`: `boolean`; `isMuted`: `boolean`; `isObserver`: `boolean`; `isOnCall`: `boolean`; `isOrganizer`: `boolean`; `isPhone`: `boolean`; `isStreaming`: `boolean`; `isViewingOnly`: `boolean`; `name`: `string`; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

## Extended by

- [`Meeting`](../../classes/Meeting.md)

## Constructors

### new default()

> **new default**(`options`): [`default`](default.md)

#### Parameters

##### options

[`WidgetOptions`](../../type-aliases/WidgetOptions.md)

#### Returns

[`default`](default.md)

#### Overrides

[`default`](default.md).[`constructor`](default.md#constructors)

#### Defined in

[room.ts:76](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L76)

## Accessors

### instance

#### Get Signature

> **get** **instance**(): `null` \| `Window` \| `HTMLIFrameElement`

The widget instance.

##### Returns

`null` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

[`default`](default.md).[`instance`](default.md#instance)

#### Defined in

[widget.ts:271](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L271)

***

### isReady

#### Get Signature

> **get** **isReady**(): `boolean`

Whether the widget is ready.

##### Returns

`boolean`

#### Inherited from

[`default`](default.md).[`isReady`](default.md#isready)

#### Defined in

[widget.ts:264](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L264)

***

### wnd

#### Get Signature

> **get** **wnd**(): `null` \| `Window`

The Window or WindowProxy instance of the widget.

##### Returns

`null` \| `Window`

#### Inherited from

[`default`](default.md).[`wnd`](default.md#wnd)

#### Defined in

[widget.ts:278](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L278)

## Methods

### adjustParticipantAudio()

> **adjustParticipantAudio**(`participantId`, `settings`): `void`

Adjusts the audio output volume and/or stereo position of a remote participant.

#### Parameters

##### participantId

`number`

participant id.

##### settings

[`AudioSettings`](../../type-aliases/AudioSettings.md)

audio settings.

#### Returns

`void`

#### Defined in

[room.ts:161](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L161)

***

### emit()

> **emit**\<`K`\>(`eventName`, `data`?): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type Parameters

• **K** *extends* [`EventKey`](../type-aliases/EventKey.md)\<\{ `conference.CHANGE`: \{ `id`: `number`; `incomingVideo`: `boolean`; `isActive`: `boolean`; `isLocked`: `boolean`; `isRecording`: `boolean`; `isSecured`: `boolean`; `isStreaming`: `boolean`; `mode`: `string`; `name`: `string`; `roomSize`: `number`; \}; `conference.CONFERENCE_CALL_EXIT`: \{ `reason`: `string`; \}; `conference.SPEAKER`: \{ `id`: `number`; `speakerId`: `number`; \}; `device.DEVICE_IN_USE`: \{ `deviceId`: `"default"`; `kind`: `"audioinput"` \| `"audiooutput"` \| `"videoinput"`; \}; `device.DEVICE_LIST_CHANGED`: \{ `audioinput`: `MediaDeviceInfo`[]; `audiooutput`: `MediaDeviceInfo`[]; `videoinput`: `MediaDeviceInfo`[]; \}; `participant.AUDIO_LEVEL`: \{ `audioLevel`: `number`; `id`: `number`; \}; `participant.CHANGE`: \{ `handRaised`: `boolean`; `id`: `number`; `isBlocked`: `boolean`; `isCameraOn`: `boolean`; `isCurrent`: `boolean`; `isInternet`: `boolean`; `isJoining`: `boolean`; `isLeft`: `boolean`; `isModerator`: `boolean`; `isMuted`: `boolean`; `isObserver`: `boolean`; `isOnCall`: `boolean`; `isOrganizer`: `boolean`; `isPhone`: `boolean`; `isStreaming`: `boolean`; `isViewingOnly`: `boolean`; `name`: `string`; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### data?

`object`\[`K`\]

#### Returns

`boolean`

#### Inherited from

[`default`](default.md).[`emit`](default.md#emit)

#### Defined in

[widget.ts:317](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L317)

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

#### Defined in

[room.ts:150](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L150)

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../type-aliases/EventKey.md)\<\{ `conference.CHANGE`: \{ `id`: `number`; `incomingVideo`: `boolean`; `isActive`: `boolean`; `isLocked`: `boolean`; `isRecording`: `boolean`; `isSecured`: `boolean`; `isStreaming`: `boolean`; `mode`: `string`; `name`: `string`; `roomSize`: `number`; \}; `conference.CONFERENCE_CALL_EXIT`: \{ `reason`: `string`; \}; `conference.SPEAKER`: \{ `id`: `number`; `speakerId`: `number`; \}; `device.DEVICE_IN_USE`: \{ `deviceId`: `"default"`; `kind`: `"audioinput"` \| `"audiooutput"` \| `"videoinput"`; \}; `device.DEVICE_LIST_CHANGED`: \{ `audioinput`: `MediaDeviceInfo`[]; `audiooutput`: `MediaDeviceInfo`[]; `videoinput`: `MediaDeviceInfo`[]; \}; `participant.AUDIO_LEVEL`: \{ `audioLevel`: `number`; `id`: `number`; \}; `participant.CHANGE`: \{ `handRaised`: `boolean`; `id`: `number`; `isBlocked`: `boolean`; `isCameraOn`: `boolean`; `isCurrent`: `boolean`; `isInternet`: `boolean`; `isJoining`: `boolean`; `isLeft`: `boolean`; `isModerator`: `boolean`; `isMuted`: `boolean`; `isObserver`: `boolean`; `isOnCall`: `boolean`; `isOrganizer`: `boolean`; `isPhone`: `boolean`; `isStreaming`: `boolean`; `isViewingOnly`: `boolean`; `name`: `string`; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../type-aliases/Listener.md)\<`object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](default.md).[`off`](default.md#off)

#### Defined in

[widget.ts:298](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L298)

***

### on()

> **on**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../type-aliases/EventKey.md)\<\{ `conference.CHANGE`: \{ `id`: `number`; `incomingVideo`: `boolean`; `isActive`: `boolean`; `isLocked`: `boolean`; `isRecording`: `boolean`; `isSecured`: `boolean`; `isStreaming`: `boolean`; `mode`: `string`; `name`: `string`; `roomSize`: `number`; \}; `conference.CONFERENCE_CALL_EXIT`: \{ `reason`: `string`; \}; `conference.SPEAKER`: \{ `id`: `number`; `speakerId`: `number`; \}; `device.DEVICE_IN_USE`: \{ `deviceId`: `"default"`; `kind`: `"audioinput"` \| `"audiooutput"` \| `"videoinput"`; \}; `device.DEVICE_LIST_CHANGED`: \{ `audioinput`: `MediaDeviceInfo`[]; `audiooutput`: `MediaDeviceInfo`[]; `videoinput`: `MediaDeviceInfo`[]; \}; `participant.AUDIO_LEVEL`: \{ `audioLevel`: `number`; `id`: `number`; \}; `participant.CHANGE`: \{ `handRaised`: `boolean`; `id`: `number`; `isBlocked`: `boolean`; `isCameraOn`: `boolean`; `isCurrent`: `boolean`; `isInternet`: `boolean`; `isJoining`: `boolean`; `isLeft`: `boolean`; `isModerator`: `boolean`; `isMuted`: `boolean`; `isObserver`: `boolean`; `isOnCall`: `boolean`; `isOrganizer`: `boolean`; `isPhone`: `boolean`; `isStreaming`: `boolean`; `isViewingOnly`: `boolean`; `name`: `string`; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../type-aliases/Listener.md)\<`object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](default.md).[`on`](default.md#on)

#### Defined in

[widget.ts:290](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L290)

***

### once()

> **once**\<`K`\>(`eventName`, `listener`): `this`

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type Parameters

• **K** *extends* [`EventKey`](../type-aliases/EventKey.md)\<\{ `conference.CHANGE`: \{ `id`: `number`; `incomingVideo`: `boolean`; `isActive`: `boolean`; `isLocked`: `boolean`; `isRecording`: `boolean`; `isSecured`: `boolean`; `isStreaming`: `boolean`; `mode`: `string`; `name`: `string`; `roomSize`: `number`; \}; `conference.CONFERENCE_CALL_EXIT`: \{ `reason`: `string`; \}; `conference.SPEAKER`: \{ `id`: `number`; `speakerId`: `number`; \}; `device.DEVICE_IN_USE`: \{ `deviceId`: `"default"`; `kind`: `"audioinput"` \| `"audiooutput"` \| `"videoinput"`; \}; `device.DEVICE_LIST_CHANGED`: \{ `audioinput`: `MediaDeviceInfo`[]; `audiooutput`: `MediaDeviceInfo`[]; `videoinput`: `MediaDeviceInfo`[]; \}; `participant.AUDIO_LEVEL`: \{ `audioLevel`: `number`; `id`: `number`; \}; `participant.CHANGE`: \{ `handRaised`: `boolean`; `id`: `number`; `isBlocked`: `boolean`; `isCameraOn`: `boolean`; `isCurrent`: `boolean`; `isInternet`: `boolean`; `isJoining`: `boolean`; `isLeft`: `boolean`; `isModerator`: `boolean`; `isMuted`: `boolean`; `isObserver`: `boolean`; `isOnCall`: `boolean`; `isOrganizer`: `boolean`; `isPhone`: `boolean`; `isStreaming`: `boolean`; `isViewingOnly`: `boolean`; `name`: `string`; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../type-aliases/Listener.md)\<`object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](default.md).[`once`](default.md#once)

#### Defined in

[widget.ts:307](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L307)

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

[`default`](default.md).[`removeAllListeners`](default.md#removealllisteners)

#### Defined in

[widget.ts:327](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L327)

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

#### Defined in

[room.ts:92](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L92)

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

#### Defined in

[room.ts:100](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L100)

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

#### Defined in

[room.ts:108](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L108)

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

#### Defined in

[room.ts:124](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L124)

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

#### Defined in

[room.ts:116](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L116)

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

#### Defined in

[room.ts:84](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L84)

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

#### Defined in

[room.ts:135](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/room.ts#L135)

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

[`default`](default.md).[`toggle`](default.md#toggle)

#### Defined in

[widget.ts:255](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L255)

***

### unload()

> **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[`default`](default.md).[`unload`](default.md#unload)

#### Defined in

[widget.ts:227](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L227)
