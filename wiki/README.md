@iotum/callbridge-js

# @iotum/callbridge-js

## Table of contents

### Modules

- [\_internal](modules/internal.md)

### Enumerations

- [LayoutOption](enums/LayoutOption.md)
- [MeetingAction](enums/MeetingAction.md)
- [ScheduleAction](enums/ScheduleAction.md)
- [Service](enums/Service.md)

### Classes

- [Dashboard](classes/Dashboard.md)
- [Livestream](classes/Livestream.md)
- [Meeting](classes/Meeting.md)

### Type Aliases

- [AudioSettings](README.md#audiosettings)
- [ChatRoom](README.md#chatroom)
- [LivestreamOptions](README.md#livestreamoptions)
- [MeetingOptions](README.md#meetingoptions)
- [ServiceOptions](README.md#serviceoptions)
- [WidgetOptions](README.md#widgetoptions)

## Type Aliases

### AudioSettings

Ƭ **AudioSettings**: `Object`

Audio output settings.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `pan?` | `number` | The output volume. Valid range: 0 (silence) - 1 (max). **`Default`** ```ts 1 ``` |
| `volume?` | `number` | The stereo position. Valid range: -1 (left) - 1 (right). **`Default`** ```ts 0 ``` |

#### Defined in

[room.ts:6](https://github.com/iotum/callbridge-js/blob/8719b43/src/room.ts#L6)

___

### ChatRoom

Ƭ **ChatRoom**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accounts` | \{ `id`: `number` ; `name`: `string` ; `picture_url`: `string`  }[] | Accounts added to the room. |
| `description?` | `string` | Room description. |
| `path` | `string` | Room path, used for navigation. **`See`** `Dashboard.load` |

#### Defined in

[dashboard.ts:86](https://github.com/iotum/callbridge-js/blob/8719b43/src/dashboard.ts#L86)

___

### LivestreamOptions

Ƭ **LivestreamOptions**: `Object`

Livestream options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat?` | `boolean` \| ``"intercept"`` | If provided, shows the chat panel to the right of the livestream player. If set to 'intercept', emits an event instead of sending the message. |
| `hideControls?` | `boolean` | If set, hides the native media controls on the livestream player. |
| `name?` | `string` | If provided, sets the viewer's name. |

#### Defined in

[livestream.ts:6](https://github.com/iotum/callbridge-js/blob/8719b43/src/livestream.ts#L6)

___

### MeetingOptions

Ƭ **MeetingOptions**: `Object`

Meeting options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `afterCallUrl?` | `string` | SSO Only. If provided, the user will be redirected to the provided URL after exiting a call. |
| `audioLevel?` | `boolean` | If set, emits audio level events. |
| `autoView?` | `boolean` | Mobile Only. If set, automatically switches speaker view to bottom vs. left based on the device orientation. |
| `moderatorToken?` | `string` | If provided, the user will enter the meeting room as a moderator. |
| `mute?` | \{ `camera?`: `boolean` ; `mic?`: `boolean`  } | If set, the user will enter the meeting room with the device turned off. |
| `mute.camera?` | `boolean` | Camera. |
| `mute.mic?` | `boolean` | Microphone. |
| `name?` | `string` | If provided, the user will not be prompted for name when entering meeting room. |
| `observer?` | `boolean` | If set, the user will enter the meeting room with camera off and without a participant tile to others. They can still hear and be heard by others. |
| `resolution?` | ``180`` \| ``360`` \| ``720`` \| ``1080`` | If provided, sets the maximum sending video resolution. |
| `skipJoin?` | `boolean` | If set, the user will skip the video/audio device selection dialog when entering meeting room, and use the system default or previously used devices. |
| `stripLayout?` | `boolean` | If set, renders the participants as a strip with fixed tile height and 6 tiles. |
| `tiles?` | `number` | If provided, sets the maximum on-screen tiles in the gallery view page. |
| `view?` | ``"gallery"`` \| ``"bottom_speaker"`` \| ``"left_side_speaker"`` | If provided, sets the initial meeting view upon entering. The default view is gallery view. |

#### Defined in

[meeting.ts:7](https://github.com/iotum/callbridge-js/blob/8719b43/src/meeting.ts#L7)

___

### ServiceOptions

Ƭ **ServiceOptions**: `Object`

Dashboard service options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `hiddenElements?` | `number`[] | the UI elements to be hidden. |
| `layout?` | [`LayoutOption`](enums/LayoutOption.md) | The service layout. |
| `meetingAction?` | [`MeetingAction`](enums/MeetingAction.md) | The meeting action. |
| `pathname?` | `string` | The initial path to load. |
| `scheduleAction?` | [`ScheduleAction`](enums/ScheduleAction.md) | The schedule action. |

#### Defined in

[dashboard.ts:59](https://github.com/iotum/callbridge-js/blob/8719b43/src/dashboard.ts#L59)

___

### WidgetOptions

Ƭ **WidgetOptions**: `Object`

Widget options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Window` \| `HTMLElement` \| `string` | The container for the widget. Supports attached or detached DOM element, document selector, or `window` (new tab). If the element is detached, it will be set to invisible and attached to the main document. |
| `domain` | `string` | The Callbridge domain of the user. |
| `sso?` | \{ `hostId?`: `number` ; `token?`: `string`  } | Optional, Single Sign-On |
| `sso.hostId?` | `number` | Optional account number of the user. |
| `sso.token?` | `string` | Optional host-specific authorization token. |
| `target?` | \{ `autoClose?`: `boolean` ; `checkExisting?`: `boolean` ; `features?`: `string` ; `name?`: `string`  } | Optional, options for `window.open` when `container` is `window`. **`See`** [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open). |
| `target.autoClose?` | `boolean` | Whether to close the popup when the meeting is over. |
| `target.checkExisting?` | `boolean` | Whether to wait (up to 1.5 sec) for the existing widget. Requires a matching "window target name". |
| `target.features?` | `string` | The window features. |
| `target.name?` | `string` | The window target name. |

#### Defined in

[widget.ts:9](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L9)
