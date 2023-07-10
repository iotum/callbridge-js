[@iotum/callbridge-js](../README.md) / [\_internal](../modules/internal.md) / default

# Class: default<T\>

[_internal](../modules/internal.md).default

Callbridge Widget.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](../modules/internal.md#eventmap) \| { `widget.ERROR`: `string` ; `widget.LOAD`: `void` ; `widget.UNLOAD`: `void`  } |

## Hierarchy

- **`default`**

  ↳ [`Dashboard`](Dashboard.md)

  ↳ [`Livestream`](Livestream.md)

  ↳ [`default`](internal.default-1.md)

## Implements

- [`WidgetEventEmitter`](../interfaces/internal.WidgetEventEmitter.md)<`T`\>

## Table of contents

### Constructors

- [constructor](internal.default.md#constructor)

### Properties

- [emitter](internal.default.md#emitter)

### Accessors

- [instance](internal.default.md#instance)
- [isReady](internal.default.md#isready)
- [wnd](internal.default.md#wnd)

### Methods

- [emit](internal.default.md#emit)
- [off](internal.default.md#off)
- [on](internal.default.md#on)
- [once](internal.default.md#once)
- [removeAllListeners](internal.default.md#removealllisteners)
- [toggle](internal.default.md#toggle)
- [unload](internal.default.md#unload)

## Constructors

### constructor

• **new default**<`T`\>(`«destructured»`, `autoLoad?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](../modules/internal.md#eventmap) \| { `widget.ERROR`: `string` ; `widget.LOAD`: `void` ; `widget.UNLOAD`: `void`  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | [`WidgetOptions`](../README.md#widgetoptions) | `undefined` |
| `autoLoad` | `boolean` | `false` |

#### Defined in

[widget.ts:154](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L154)

## Properties

### emitter

• `Private` **emitter**: `EventEmitter`

#### Defined in

[widget.ts:136](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L136)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Defined in

[widget.ts:235](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L235)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Defined in

[widget.ts:228](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L228)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Defined in

[widget.ts:242](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L242)

## Methods

### emit

▸ **emit**<`K`\>(`eventName`, `data?`): `boolean`

Synchronously calls each of the listeners registered for the event namedeventName,
in the order they were registered, passing the supplied arguments to each.
Returns true if the event had listeners, false otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | `T`[`K`] |

#### Returns

`boolean`

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[emit](../interfaces/internal.WidgetEventEmitter.md#emit)

#### Defined in

[widget.ts:281](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L281)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`default`](internal.default.md)<`T`\>

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)<`T`[`K`]\> |

#### Returns

[`default`](internal.default.md)<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[off](../interfaces/internal.WidgetEventEmitter.md#off)

#### Defined in

[widget.ts:262](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L262)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`default`](internal.default.md)<`T`\>

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)<`T`[`K`]\> |

#### Returns

[`default`](internal.default.md)<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[on](../interfaces/internal.WidgetEventEmitter.md#on)

#### Defined in

[widget.ts:254](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L254)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`default`](internal.default.md)<`T`\>

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)<`T`[`K`]\> |

#### Returns

[`default`](internal.default.md)<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[once](../interfaces/internal.WidgetEventEmitter.md#once)

#### Defined in

[widget.ts:271](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L271)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`default`](internal.default.md)<`T`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`default`](internal.default.md)<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[removeAllListeners](../interfaces/internal.WidgetEventEmitter.md#removealllisteners)

#### Defined in

[widget.ts:291](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L291)

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

#### Defined in

[widget.ts:219](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L219)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Defined in

[widget.ts:195](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L195)
