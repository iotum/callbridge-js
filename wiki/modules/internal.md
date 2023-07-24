[@iotum/callbridge-js](../README.md) / \_internal

# Module: \_internal

## Table of contents

### Classes

- [default](../classes/internal.default.md)
- [default](../classes/internal.default-1.md)

### Interfaces

- [WidgetEventEmitter](../interfaces/internal.WidgetEventEmitter.md)

### Type Aliases

- [EventKey](internal.md#eventkey)
- [EventMap](internal.md#eventmap)
- [Listener](internal.md#listener)
- [SearchParams](internal.md#searchparams)

## Type Aliases

### EventKey

Ƭ **EventKey**<`T`\>: `string` & keyof `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](internal.md#eventmap) |

#### Defined in

[widget.ts:120](https://github.com/iotum/callbridge-js/blob/5b639d5/src/widget.ts#L120)

___

### EventMap

Ƭ **EventMap**: `Record`<`string`, `any`\>

#### Defined in

[widget.ts:119](https://github.com/iotum/callbridge-js/blob/5b639d5/src/widget.ts#L119)

___

### Listener

Ƭ **Listener**<`T`\>: (`params`: `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`params`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `T` |

##### Returns

`void`

#### Defined in

[widget.ts:121](https://github.com/iotum/callbridge-js/blob/5b639d5/src/widget.ts#L121)

___

### SearchParams

Ƭ **SearchParams**: `Object`

#### Index signature

▪ [opt: `string`]: `string` \| `number` \| `boolean` \| ``null`` \| `undefined`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `redirect_url` | `string` \| ``null`` |

#### Defined in

[widget.ts:57](https://github.com/iotum/callbridge-js/blob/5b639d5/src/widget.ts#L57)
