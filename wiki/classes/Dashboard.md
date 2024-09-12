[@iotum/callbridge-js](../README.md) / Dashboard

# Class: Dashboard

Callbridge Dashboard.

## Hierarchy

- [`default`](internal.default.md)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }\>

  ↳ **`Dashboard`**

## Table of contents

### Constructors

- [constructor](Dashboard.md#constructor)

### Accessors

- [instance](Dashboard.md#instance)
- [isReady](Dashboard.md#isready)
- [wnd](Dashboard.md#wnd)

### Methods

- [emit](Dashboard.md#emit)
- [go](Dashboard.md#go)
- [load](Dashboard.md#load)
- [off](Dashboard.md#off)
- [on](Dashboard.md#on)
- [once](Dashboard.md#once)
- [removeAllListeners](Dashboard.md#removealllisteners)
- [setHiddenElements](Dashboard.md#sethiddenelements)
- [toggle](Dashboard.md#toggle)
- [unload](Dashboard.md#unload)

## Constructors

### constructor

• **new Dashboard**(`options`, `service?`, `serviceOptions?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../README.md#widgetoptions) | `undefined` | Widget options |
| `service` | [`Service`](../enums/Service.md) | `Service.None` | Optional, the page to load after logging in |
| `serviceOptions` | [`ServiceOptions`](../README.md#serviceoptions) | `{}` | Optional, service options. |

#### Overrides

[default](internal.default.md).[constructor](internal.default.md#constructor)

#### Defined in

[dashboard.ts:144](https://github.com/iotum/callbridge-js/blob/1c541f0/src/dashboard.ts#L144)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Widget.instance

#### Defined in

[widget.ts:271](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L271)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Widget.isReady

#### Defined in

[widget.ts:264](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L264)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Widget.wnd

#### Defined in

[widget.ts:278](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L278)

## Methods

### emit

▸ **emit**\<`K`\>(`eventName`, `data?`): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | \{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }[`K`] |

#### Returns

`boolean`

#### Inherited from

[default](internal.default.md).[emit](internal.default.md#emit)

#### Defined in

[widget.ts:317](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L317)

___

### go

▸ **go**(`delta`): `void`

Loads a specific page from the session history.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | `number` | The position in the history to which you want to move, relative to the current page. A negative value moves backwards, a positive value moves forwards. |

#### Returns

`void`

#### Defined in

[dashboard.ts:189](https://github.com/iotum/callbridge-js/blob/1c541f0/src/dashboard.ts#L189)

___

### load

▸ **load**(`service`, `options?`): `void`

Loads the service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | [`Service`](../enums/Service.md) | the service to load. |
| `options` | [`ServiceOptions`](../README.md#serviceoptions) | Optional, service options. |

#### Returns

`void`

#### Defined in

[dashboard.ts:179](https://github.com/iotum/callbridge-js/blob/1c541f0/src/dashboard.ts#L179)

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): [`Dashboard`](Dashboard.md)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }[`K`]\> |

#### Returns

[`Dashboard`](Dashboard.md)

#### Inherited from

[default](internal.default.md).[off](internal.default.md#off)

#### Defined in

[widget.ts:298](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L298)

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`Dashboard`](Dashboard.md)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }[`K`]\> |

#### Returns

[`Dashboard`](Dashboard.md)

#### Inherited from

[default](internal.default.md).[on](internal.default.md#on)

#### Defined in

[widget.ts:290](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L290)

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`Dashboard`](Dashboard.md)

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string` ; `pathname`: `string` ; `search`: `string` ; `service`: [`Service`](../enums/Service.md)  } ; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string` ; `options`: [`MeetingOptions`](../README.md#meetingoptions)  } ; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id?`: `number` ; `options`: [`ScheduleOptions`](../modules/internal.md#scheduleoptions)  } ; `dashboard.READY`: \{ `existing?`: `boolean`  } ; `dashboard.ROOM_LIST`: \{ `channels`: \{ `[channelId: string]`: [`ChatRoom`](../README.md#chatroom);  } ; `rooms`: \{ `[roomId: string]`: [`ChatRoom`](../README.md#chatroom);  }  } ; `dashboard.SESSION_EXPIRED`: `void` ; `dashboard.UNLOAD`: `void` ; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{ `[id: string]`: `number`;  }  } ; `room.READY`: `void` ; `room.UNLOAD`: \{ `reason`: `string`  }  }[`K`]\> |

#### Returns

[`Dashboard`](Dashboard.md)

#### Inherited from

[default](internal.default.md).[once](internal.default.md#once)

#### Defined in

[widget.ts:307](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L307)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Dashboard`](Dashboard.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` |

#### Returns

[`Dashboard`](Dashboard.md)

#### Inherited from

[default](internal.default.md).[removeAllListeners](internal.default.md#removealllisteners)

#### Defined in

[widget.ts:327](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L327)

___

### setHiddenElements

▸ **setHiddenElements**(`ids`): `void`

Hides elements on the dashboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `number`[] | An array of element IDs to hide. |

#### Returns

`void`

#### Defined in

[dashboard.ts:197](https://github.com/iotum/callbridge-js/blob/1c541f0/src/dashboard.ts#L197)

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

[widget.ts:255](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L255)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[default](internal.default.md).[unload](internal.default.md#unload)

#### Defined in

[widget.ts:227](https://github.com/iotum/callbridge-js/blob/1c541f0/src/widget.ts#L227)
