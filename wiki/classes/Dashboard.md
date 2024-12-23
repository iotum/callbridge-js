[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / Dashboard

# Class: Dashboard

Callbridge Dashboard.

## Extends

- [`default`](../internal/classes/default.md)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string`; `pathname`: `string`; `search`: `string`; `service`: [`Service`](../enumerations/Service.md); \}; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string`; `options`: [`MeetingOptions`](../type-aliases/MeetingOptions.md); \}; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id`: `number`; `options`: [`ScheduleOptions`](../internal/type-aliases/ScheduleOptions.md); \}; `dashboard.READY`: \{ `existing`: `boolean`; \}; `dashboard.ROOM_LIST`: \{ `channels`: \{\}; `rooms`: \{\}; \}; `dashboard.SEARCH_RESULT`: \{ `error`: `string`; `query`: `string`; `result`: `object`[]; \}; `dashboard.SEARCH_START`: \{ `order`: `"date"` \| `"relevance"`; `page`: `number`; `query`: `string`; \}; `dashboard.SESSION_EXPIRED`: `void`; `dashboard.UNLOAD`: `void`; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{\}; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

## Constructors

### new Dashboard()

> **new Dashboard**(`options`, `service`, `serviceOptions`): [`Dashboard`](Dashboard.md)

#### Parameters

##### options

[`WidgetOptions`](../type-aliases/WidgetOptions.md)

Widget options

##### service

[`Service`](../enumerations/Service.md) = `Service.None`

Optional, the page to load after logging in

##### serviceOptions

[`ServiceOptions`](../type-aliases/ServiceOptions.md) = `{}`

Optional, service options.

#### Returns

[`Dashboard`](Dashboard.md)

#### Overrides

[`default`](../internal/classes/default.md).[`constructor`](../internal/classes/default.md#constructors)

#### Defined in

[dashboard.ts:202](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/dashboard.ts#L202)

## Accessors

### instance

#### Get Signature

> **get** **instance**(): `null` \| `Window` \| `HTMLIFrameElement`

The widget instance.

##### Returns

`null` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

[`default`](../internal/classes/default.md).[`instance`](../internal/classes/default.md#instance)

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

[`default`](../internal/classes/default.md).[`isReady`](../internal/classes/default.md#isready)

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

[`default`](../internal/classes/default.md).[`wnd`](../internal/classes/default.md#wnd)

#### Defined in

[widget.ts:278](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L278)

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `data`?): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string`; `pathname`: `string`; `search`: `string`; `service`: [`Service`](../enumerations/Service.md); \}; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string`; `options`: [`MeetingOptions`](../type-aliases/MeetingOptions.md); \}; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id`: `number`; `options`: [`ScheduleOptions`](../internal/type-aliases/ScheduleOptions.md); \}; `dashboard.READY`: \{ `existing`: `boolean`; \}; `dashboard.ROOM_LIST`: \{ `channels`: \{\}; `rooms`: \{\}; \}; `dashboard.SEARCH_RESULT`: \{ `error`: `string`; `query`: `string`; `result`: `object`[]; \}; `dashboard.SEARCH_START`: \{ `order`: `"date"` \| `"relevance"`; `page`: `number`; `query`: `string`; \}; `dashboard.SESSION_EXPIRED`: `void`; `dashboard.UNLOAD`: `void`; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{\}; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### data?

`object`\[`K`\]

#### Returns

`boolean`

#### Inherited from

[`default`](../internal/classes/default.md).[`emit`](../internal/classes/default.md#emit)

#### Defined in

[widget.ts:317](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L317)

***

### go()

> **go**(`delta`): `void`

Loads a specific page from the session history.

#### Parameters

##### delta

`number`

The position in the history to which you want to move,
relative to the current page. A negative value moves backwards,
a positive value moves forwards.

#### Returns

`void`

#### Defined in

[dashboard.ts:283](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/dashboard.ts#L283)

***

### load()

> **load**(`service`, `options`): `void`

Loads the service.

#### Parameters

##### service

[`Service`](../enumerations/Service.md)

the service to load.

##### options

[`ServiceOptions`](../type-aliases/ServiceOptions.md) = `{}`

Optional, service options.

#### Returns

`void`

#### Defined in

[dashboard.ts:273](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/dashboard.ts#L273)

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string`; `pathname`: `string`; `search`: `string`; `service`: [`Service`](../enumerations/Service.md); \}; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string`; `options`: [`MeetingOptions`](../type-aliases/MeetingOptions.md); \}; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id`: `number`; `options`: [`ScheduleOptions`](../internal/type-aliases/ScheduleOptions.md); \}; `dashboard.READY`: \{ `existing`: `boolean`; \}; `dashboard.ROOM_LIST`: \{ `channels`: \{\}; `rooms`: \{\}; \}; `dashboard.SEARCH_RESULT`: \{ `error`: `string`; `query`: `string`; `result`: `object`[]; \}; `dashboard.SEARCH_START`: \{ `order`: `"date"` \| `"relevance"`; `page`: `number`; `query`: `string`; \}; `dashboard.SESSION_EXPIRED`: `void`; `dashboard.UNLOAD`: `void`; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{\}; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../internal/type-aliases/Listener.md)\<`object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`off`](../internal/classes/default.md#off)

#### Defined in

[widget.ts:298](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L298)

***

### on()

> **on**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string`; `pathname`: `string`; `search`: `string`; `service`: [`Service`](../enumerations/Service.md); \}; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string`; `options`: [`MeetingOptions`](../type-aliases/MeetingOptions.md); \}; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id`: `number`; `options`: [`ScheduleOptions`](../internal/type-aliases/ScheduleOptions.md); \}; `dashboard.READY`: \{ `existing`: `boolean`; \}; `dashboard.ROOM_LIST`: \{ `channels`: \{\}; `rooms`: \{\}; \}; `dashboard.SEARCH_RESULT`: \{ `error`: `string`; `query`: `string`; `result`: `object`[]; \}; `dashboard.SEARCH_START`: \{ `order`: `"date"` \| `"relevance"`; `page`: `number`; `query`: `string`; \}; `dashboard.SESSION_EXPIRED`: `void`; `dashboard.UNLOAD`: `void`; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{\}; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../internal/type-aliases/Listener.md)\<`object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`on`](../internal/classes/default.md#on)

#### Defined in

[widget.ts:290](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L290)

***

### once()

> **once**\<`K`\>(`eventName`, `listener`): `this`

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `dashboard.NAVIGATE`: \{ `hash`: `string`; `pathname`: `string`; `search`: `string`; `service`: [`Service`](../enumerations/Service.md); \}; `dashboard.NAVIGATE_TO_CALL`: \{ `accessCode`: `string`; `options`: [`MeetingOptions`](../type-aliases/MeetingOptions.md); \}; `dashboard.NAVIGATE_TO_SCHEDULE`: \{ `id`: `number`; `options`: [`ScheduleOptions`](../internal/type-aliases/ScheduleOptions.md); \}; `dashboard.READY`: \{ `existing`: `boolean`; \}; `dashboard.ROOM_LIST`: \{ `channels`: \{\}; `rooms`: \{\}; \}; `dashboard.SEARCH_RESULT`: \{ `error`: `string`; `query`: `string`; `result`: `object`[]; \}; `dashboard.SEARCH_START`: \{ `order`: `"date"` \| `"relevance"`; `page`: `number`; `query`: `string`; \}; `dashboard.SESSION_EXPIRED`: `void`; `dashboard.UNLOAD`: `void`; `dashboard.UNREAD_MESSAGES`: \{ `rooms`: \{\}; \}; `room.READY`: `void`; `room.UNLOAD`: \{ `reason`: `string`; \}; \}\>

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../internal/type-aliases/Listener.md)\<`object`\[`K`\]\>

#### Returns

`this`

#### Inherited from

[`default`](../internal/classes/default.md).[`once`](../internal/classes/default.md#once)

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

[`default`](../internal/classes/default.md).[`removeAllListeners`](../internal/classes/default.md#removealllisteners)

#### Defined in

[widget.ts:327](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L327)

***

### search()

> **search**(`query`, `options`?): `void`

Search for thing.

#### Parameters

##### query

`string`

The search query.

##### options?

[`SearchOptions`](../type-aliases/SearchOptions.md)

Optional, search options.

#### Returns

`void`

#### Throws

- "Not implemented" when the service is not "Search".
  - "Nothing to search" when the query is empty.

#### Defined in

[dashboard.ts:262](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/dashboard.ts#L262)

***

### setHiddenElements()

> **setHiddenElements**(`ids`): `void`

Hides elements on the dashboard.

#### Parameters

##### ids

`number`[]

An array of element IDs to hide.

#### Returns

`void`

#### Defined in

[dashboard.ts:291](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/dashboard.ts#L291)

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

[`default`](../internal/classes/default.md).[`toggle`](../internal/classes/default.md#toggle)

#### Defined in

[widget.ts:255](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L255)

***

### unload()

> **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`unload`](../internal/classes/default.md#unload)

#### Defined in

[widget.ts:227](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L227)
