[@iotum/callbridge-js](../README.md) / Livestream

# Class: Livestream

Callbridge Livesteam Viewer.

## Hierarchy

- [`default`](internal.default.md)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }\>

  ↳ **`Livestream`**

## Table of contents

### Constructors

- [constructor](Livestream.md#constructor)

### Accessors

- [instance](Livestream.md#instance)
- [isReady](Livestream.md#isready)
- [wnd](Livestream.md#wnd)

### Methods

- [emit](Livestream.md#emit)
- [off](Livestream.md#off)
- [on](Livestream.md#on)
- [once](Livestream.md#once)
- [removeAllListeners](Livestream.md#removealllisteners)
- [toggle](Livestream.md#toggle)
- [unload](Livestream.md#unload)

## Constructors

### constructor

• **new Livestream**(`options`, `roomId`, `livestreamOptions?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../README.md#widgetoptions) | Widget options |
| `roomId` | `string` | The room to stream |
| `livestreamOptions?` | [`LivestreamOptions`](../README.md#livestreamoptions) | Livestream options |

#### Overrides

[default](internal.default.md).[constructor](internal.default.md#constructor)

#### Defined in

[livestream.ts:28](https://github.com/iotum/callbridge-js/blob/01c76ee/src/livestream.ts#L28)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Widget.instance

#### Defined in

[widget.ts:267](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L267)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Widget.isReady

#### Defined in

[widget.ts:260](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L260)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Widget.wnd

#### Defined in

[widget.ts:274](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L274)

## Methods

### emit

▸ **emit**\<`K`\>(`eventName`, `data?`): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | \{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }[`K`] |

#### Returns

`boolean`

#### Inherited from

[default](internal.default.md).[emit](internal.default.md#emit)

#### Defined in

[widget.ts:313](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L313)

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): [`Livestream`](Livestream.md)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }[`K`]\> |

#### Returns

[`Livestream`](Livestream.md)

#### Inherited from

[default](internal.default.md).[off](internal.default.md#off)

#### Defined in

[widget.ts:294](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L294)

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`Livestream`](Livestream.md)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }[`K`]\> |

#### Returns

[`Livestream`](Livestream.md)

#### Inherited from

[default](internal.default.md).[on](internal.default.md#on)

#### Defined in

[widget.ts:286](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L286)

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`Livestream`](Livestream.md)

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`EventKey`](../modules/internal.md#eventkey)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<\{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: `void` ; `livestream.READY`: `void`  }[`K`]\> |

#### Returns

[`Livestream`](Livestream.md)

#### Inherited from

[default](internal.default.md).[once](internal.default.md#once)

#### Defined in

[widget.ts:303](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L303)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Livestream`](Livestream.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` |

#### Returns

[`Livestream`](Livestream.md)

#### Inherited from

[default](internal.default.md).[removeAllListeners](internal.default.md#removealllisteners)

#### Defined in

[widget.ts:323](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L323)

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

[widget.ts:251](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L251)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

[default](internal.default.md).[unload](internal.default.md#unload)

#### Defined in

[widget.ts:223](https://github.com/iotum/callbridge-js/blob/01c76ee/src/widget.ts#L223)
