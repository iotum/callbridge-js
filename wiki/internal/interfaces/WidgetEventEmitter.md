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

[widget.ts:135](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L135)

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

[widget.ts:133](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L133)

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

[widget.ts:132](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L132)

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

[widget.ts:134](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L134)

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

[widget.ts:136](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L136)
