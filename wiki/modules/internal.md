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
- [ScheduleOptions](internal.md#scheduleoptions)
- [SearchParams](internal.md#searchparams)

## Type Aliases

### EventKey

Ƭ **EventKey**\<`T`\>: `string` & keyof `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventMap`](internal.md#eventmap) |

#### Defined in

[widget.ts:128](https://github.com/iotum/callbridge-js/blob/cbd9966/src/widget.ts#L128)

___

### EventMap

Ƭ **EventMap**: `Record`\<`string`, `any`\>

#### Defined in

[widget.ts:127](https://github.com/iotum/callbridge-js/blob/cbd9966/src/widget.ts#L127)

___

### Listener

Ƭ **Listener**\<`T`\>: (`params`: `T`) => `void`

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

[widget.ts:129](https://github.com/iotum/callbridge-js/blob/cbd9966/src/widget.ts#L129)

___

### ScheduleOptions

Ƭ **ScheduleOptions**: `Object`

Schedule options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `copyMeeting?` | `boolean` | If `true`, create new meeting by copying settings from an existing meeting. |

#### Defined in

[meeting.ts:68](https://github.com/iotum/callbridge-js/blob/cbd9966/src/meeting.ts#L68)

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

[widget.ts:59](https://github.com/iotum/callbridge-js/blob/cbd9966/src/widget.ts#L59)
