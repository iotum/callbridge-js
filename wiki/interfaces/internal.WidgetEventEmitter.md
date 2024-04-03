[@iotum/callbridge-js](../README.md) / [\_internal](../modules/internal.md) / WidgetEventEmitter

# Interface: WidgetEventEmitter\<T\>

[\_internal](../modules/internal.md).WidgetEventEmitter

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](../modules/internal.md#eventmap) |

## Implemented by

- [`default`](../classes/internal.default.md)

## Table of contents

### Methods

- [emit](internal.WidgetEventEmitter.md#emit)
- [off](internal.WidgetEventEmitter.md#off)
- [on](internal.WidgetEventEmitter.md#on)
- [once](internal.WidgetEventEmitter.md#once)
- [removeAllListeners](internal.WidgetEventEmitter.md#removealllisteners)

## Methods

### emit

▸ **emit**\<`K`\>(`eventName`, `data?`): `boolean`

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

#### Defined in

[widget.ts:131](https://github.com/iotum/callbridge-js/blob/709e3ef/src/widget.ts#L131)

___

### off

▸ **off**\<`K`\>(`eventName`, `listener`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

#### Defined in

[widget.ts:129](https://github.com/iotum/callbridge-js/blob/709e3ef/src/widget.ts#L129)

___

### on

▸ **on**\<`K`\>(`eventName`, `listener`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

#### Defined in

[widget.ts:128](https://github.com/iotum/callbridge-js/blob/709e3ef/src/widget.ts#L128)

___

### once

▸ **once**\<`K`\>(`eventName`, `listener`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

#### Defined in

[widget.ts:130](https://github.com/iotum/callbridge-js/blob/709e3ef/src/widget.ts#L130)

___

### removeAllListeners

▸ **removeAllListeners**\<`K`\>(`eventName`, `data`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data` | `T`[`K`] |

#### Returns

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)\<`T`\>

#### Defined in

[widget.ts:132](https://github.com/iotum/callbridge-js/blob/709e3ef/src/widget.ts#L132)
