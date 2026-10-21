[**@iotum/callbridge-js**](../../README.md)

***

[@iotum/callbridge-js](../../README.md) / [\_internal](../README.md) / WidgetEventEmitter

# Interface: WidgetEventEmitter\<T\>

## Type Parameters

• **T** *extends* [`EventMap`](../type-aliases/EventMap.md)

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `data`?): `boolean`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

##### eventName

`K`

##### data?

`T`\[`K`\]

#### Returns

`boolean`

#### Defined in

[widget.ts:167](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L167)

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../type-aliases/Listener.md)\<`T`\[`K`\]\>

#### Returns

`this`

#### Defined in

[widget.ts:165](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L165)

***

### on()

> **on**\<`K`\>(`eventName`, `listener`): `this`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../type-aliases/Listener.md)\<`T`\[`K`\]\>

#### Returns

`this`

#### Defined in

[widget.ts:164](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L164)

***

### once()

> **once**\<`K`\>(`eventName`, `listener`): `this`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

##### eventName

`K`

##### listener

[`Listener`](../type-aliases/Listener.md)\<`T`\[`K`\]\>

#### Returns

`this`

#### Defined in

[widget.ts:166](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L166)

***

### removeAllListeners()

> **removeAllListeners**\<`K`\>(`eventName`, `data`): `this`

#### Type Parameters

• **K** *extends* `string`

#### Parameters

##### eventName

`K`

##### data

`T`\[`K`\]

#### Returns

`this`

#### Defined in

[widget.ts:168](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L168)
