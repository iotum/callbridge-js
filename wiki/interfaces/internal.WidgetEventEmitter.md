[@iotum/callbridge-js](../README.md) / [\_internal](../modules/internal.md) / WidgetEventEmitter

# Interface: WidgetEventEmitter<T\>

[_internal](../modules/internal.md).WidgetEventEmitter

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

▸ **emit**<`K`\>(`eventName`, `data?`): `boolean`

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

[widget.ts:119](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L119)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

#### Defined in

[widget.ts:117](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L117)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

#### Defined in

[widget.ts:116](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L116)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

#### Defined in

[widget.ts:118](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L118)

___

### removeAllListeners

▸ **removeAllListeners**<`K`\>(`eventName`, `data`): [`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

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

[`WidgetEventEmitter`](internal.WidgetEventEmitter.md)<`T`\>

#### Defined in

[widget.ts:120](https://github.com/iotum/callbridge-js/blob/2066c52/src/widget.ts#L120)
