[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / MeetingOptions

# Type Alias: MeetingOptions

> **MeetingOptions**: `object`

Meeting options.

## Type declaration

### afterCallUrl?

> `optional` **afterCallUrl**: `string`

SSO Only. If provided, the user will be redirected to the provided URL after exiting a call.

### audioLevel?

> `optional` **audioLevel**: `boolean`

If set, emits audio level events.

### autoView?

> `optional` **autoView**: `boolean`

Mobile Only. If set, automatically switches speaker view to bottom vs. left based on the device orientation.

### moderatorToken?

> `optional` **moderatorToken**: `string`

If provided, the user will enter the meeting room as a moderator.

### mute?

> `optional` **mute**: `object`

If set, the user will enter the meeting room with the device turned off.

#### mute.camera?

> `optional` **camera**: `boolean`

Camera.

#### mute.mic?

> `optional` **mic**: `boolean`

Microphone.

### name?

> `optional` **name**: `string`

If provided, the user will not be prompted for name when entering meeting room.

### observer?

> `optional` **observer**: `boolean`

If set, the user will enter the meeting room with camera off and without a participant tile to others. They can still hear and be heard by others.

### resolution?

> `optional` **resolution**: `180` \| `360` \| `720` \| `1080`

If provided, sets the maximum sending video resolution.

### skipJoin?

> `optional` **skipJoin**: `boolean`

If set, the user will skip the video/audio device selection dialog when entering meeting room, and use the system default or previously used devices.

### stripLayout?

> `optional` **stripLayout**: `boolean`

If set, renders the participants as a strip with fixed tile height and 6 tiles.

### tiles?

> `optional` **tiles**: `number`

If provided, sets the maximum on-screen tiles in the gallery view page.

### view?

> `optional` **view**: `"gallery"` \| `"bottom_speaker"` \| `"left_side_speaker"`

If provided, sets the initial meeting view upon entering. The default view is gallery view.

## Defined in

[meeting.ts:7](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/meeting.ts#L7)
