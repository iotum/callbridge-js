# Class: Livestream

Callbridge Livesteam Viewer.

## Hierarchy

- `default`<{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: ``null``  }\>

  ↳ **`Livestream`**

## Table of contents

### Constructors

- [constructor](../wiki/Livestream#constructor)

### Accessors

- [instance](../wiki/Livestream#instance)
- [isReady](../wiki/Livestream#isready)
- [wnd](../wiki/Livestream#wnd)

### Methods

- [emit](../wiki/Livestream#emit)
- [off](../wiki/Livestream#off)
- [on](../wiki/Livestream#on)
- [once](../wiki/Livestream#once)
- [removeAllListeners](../wiki/Livestream#removealllisteners)
- [unload](../wiki/Livestream#unload)

## Constructors

### constructor

• **new Livestream**(`options`, `roomId`, `livestreamOptions?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../wiki/Exports#widgetoptions) | Widget options |
| `roomId` | `string` | The room to stream |
| `livestreamOptions?` | [`LivestreamOptions`](../wiki/Exports#livestreamoptions) | Livestream options |

#### Overrides

Widget&lt;{
  &#x27;livestream.LIVE\_STREAM\_INTERCEPT\_CHAT&#x27;: null;
}\&gt;.constructor

#### Defined in

[livestream.ts:27](https://github.com/iotum/callbridge-js/blob/c07ca62/src/livestream.ts#L27)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Widget.instance

#### Defined in

[widget.ts:203](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L203)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Widget.isReady

#### Defined in

[widget.ts:196](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L196)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Widget.wnd

#### Defined in

[widget.ts:210](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L210)

## Methods

### emit

▸ **emit**<`K`\>(`eventName`, `data?`): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"livestream.LIVE_STREAM_INTERCEPT_CHAT"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | { `livestream.LIVE_STREAM_INTERCEPT_CHAT`: ``null``  }[`K`] |

#### Returns

`boolean`

#### Inherited from

Widget.emit

#### Defined in

[widget.ts:249](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L249)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`Livestream`](../wiki/Livestream)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"livestream.LIVE_STREAM_INTERCEPT_CHAT"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: ``null``  }[`K`]\> |

#### Returns

[`Livestream`](../wiki/Livestream)

#### Inherited from

Widget.off

#### Defined in

[widget.ts:230](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L230)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`Livestream`](../wiki/Livestream)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"livestream.LIVE_STREAM_INTERCEPT_CHAT"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: ``null``  }[`K`]\> |

#### Returns

[`Livestream`](../wiki/Livestream)

#### Inherited from

Widget.on

#### Defined in

[widget.ts:222](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L222)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`Livestream`](../wiki/Livestream)

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"livestream.LIVE_STREAM_INTERCEPT_CHAT"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `livestream.LIVE_STREAM_INTERCEPT_CHAT`: ``null``  }[`K`]\> |

#### Returns

[`Livestream`](../wiki/Livestream)

#### Inherited from

Widget.once

#### Defined in

[widget.ts:239](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L239)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Livestream`](../wiki/Livestream)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Livestream`](../wiki/Livestream)

#### Inherited from

Widget.removeAllListeners

#### Defined in

[widget.ts:259](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L259)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

Widget.unload

#### Defined in

[widget.ts:180](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L180)
