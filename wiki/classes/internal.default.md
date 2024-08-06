[@iotum/callbridge-js](../README.md) / [\_internal](../modules/internal.md) / default

# Class: default\<T\>

[\_internal](../modules/internal.md).default

Callbridge Widget.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](../modules/internal.md#eventmap) \| \{ `widget.ERROR`: `string` ; `widget.LOAD`: `void` ; `widget.UNLOAD`: `void`  } |

## Hierarchy

- **`default`**

  ↳ [`Dashboard`](Dashboard.md)

  ↳ [`Livestream`](Livestream.md)

  ↳ [`default`](internal.default-1.md)

## Implements

- [`WidgetEventEmitter`](../interfaces/internal.WidgetEventEmitter.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](internal.default.md#constructor)

### Properties

- [\_attached](internal.default.md#_attached)
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

• **new default**\<`T`\>(`«destructured»`, `autoLoad?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](../modules/internal.md#eventmap) \| \{ `widget.ERROR`: `string` ; `widget.LOAD`: `void` ; `widget.UNLOAD`: `void`  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | [`WidgetOptions`](../README.md#widgetoptions) | `undefined` |
| `autoLoad` | `boolean` | `false` |

#### Defined in

[widget.ts:170](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L170)

## Properties

### \_attached

• `Private` **\_attached**: `boolean` = `true`

#### Defined in

[widget.ts:150](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L150)

___

### emitter

• `Private` **emitter**: `EventEmitter`

#### Defined in

[widget.ts:148](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L148)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Defined in

[widget.ts:267](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L267)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Defined in

[widget.ts:260](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L260)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Defined in

[widget.ts:274](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L274)

## Methods

### emit

▸ **emit**\<`K`\>(`eventName`, `data?`): `boolean`

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

[widget.ts:313](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L313)

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): [`default`](internal.default.md)\<`T`\>

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<`T`[`K`]\> |

#### Returns

[`default`](internal.default.md)\<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[off](../interfaces/internal.WidgetEventEmitter.md#off)

#### Defined in

[widget.ts:294](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L294)

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`default`](internal.default.md)\<`T`\>

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | [`Listener`](../modules/internal.md#listener)\<`T`[`K`]\> |

#### Returns

[`default`](internal.default.md)\<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[on](../interfaces/internal.WidgetEventEmitter.md#on)

#### Defined in

[widget.ts:286](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L286)

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`default`](internal.default.md)\<`T`\>

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
| `listener` | [`Listener`](../modules/internal.md#listener)\<`T`[`K`]\> |

#### Returns

[`default`](internal.default.md)\<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[once](../interfaces/internal.WidgetEventEmitter.md#once)

#### Defined in

[widget.ts:303](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L303)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`default`](internal.default.md)\<`T`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` |

#### Returns

[`default`](internal.default.md)\<`T`\>

#### Implementation of

[WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md).[removeAllListeners](../interfaces/internal.WidgetEventEmitter.md#removealllisteners)

#### Defined in

[widget.ts:323](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L323)

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

[widget.ts:251](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L251)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Defined in

[widget.ts:223](https://github.com/iotum/callbridge-js/blob/8719b43/src/widget.ts#L223)
