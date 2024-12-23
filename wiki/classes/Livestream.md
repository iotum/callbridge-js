[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / Livestream

# Class: Livestream

Callbridge Livesteam Viewer.

## Extends

- [`default`](../internal/classes/default.md)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void`; `livestream.READY`: `void`; \}\>

## Constructors

### new Livestream()

> **new Livestream**(`options`, `roomId`, `livestreamOptions`?): [`Livestream`](Livestream.md)

#### Parameters

##### options

[`WidgetOptions`](../type-aliases/WidgetOptions.md)

Widget options

##### roomId

`string`

The room to stream

##### livestreamOptions?

[`LivestreamOptions`](../type-aliases/LivestreamOptions.md)

Livestream options

#### Returns

[`Livestream`](Livestream.md)

#### Overrides

[`default`](../internal/classes/default.md).[`constructor`](../internal/classes/default.md#constructors)

#### Defined in

[livestream.ts:28](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/livestream.ts#L28)

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

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void`; `livestream.READY`: `void`; \}\>

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

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type Parameters

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void`; `livestream.READY`: `void`; \}\>

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

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void`; `livestream.READY`: `void`; \}\>

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

• **K** *extends* [`EventKey`](../internal/type-aliases/EventKey.md)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void`; `livestream.READY`: `void`; \}\>

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
