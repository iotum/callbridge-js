[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / Dashboard

# Class: Dashboard

Callbridge Dashboard.

## Extends

- [`default`](../internal/classes/default.md)\<[`WidgetEvents`](../type-aliases/WidgetEvents.md) & `object`\>

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

[dashboard.ts:204](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/dashboard.ts#L204)

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

[widget.ts:296](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L296)

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

[widget.ts:289](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L289)

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

[widget.ts:303](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L303)

## Methods

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

[`default`](../internal/classes/default.md).[`emit`](../internal/classes/default.md#emit)

#### Defined in

[widget.ts:342](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L342)

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

[dashboard.ts:285](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/dashboard.ts#L285)

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

[dashboard.ts:275](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/dashboard.ts#L275)

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

[`default`](../internal/classes/default.md).[`off`](../internal/classes/default.md#off)

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

[`default`](../internal/classes/default.md).[`on`](../internal/classes/default.md#on)

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

[`default`](../internal/classes/default.md).[`once`](../internal/classes/default.md#once)

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

[`default`](../internal/classes/default.md).[`removeAllListeners`](../internal/classes/default.md#removealllisteners)

#### Defined in

[widget.ts:352](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L352)

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

[dashboard.ts:264](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/dashboard.ts#L264)

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

[dashboard.ts:293](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/dashboard.ts#L293)

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

[widget.ts:280](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L280)

***

### unload()

> **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[`default`](../internal/classes/default.md).[`unload`](../internal/classes/default.md#unload)

#### Defined in

[widget.ts:252](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L252)
