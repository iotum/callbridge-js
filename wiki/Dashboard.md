# Class: Dashboard

Callbridge Dashboard.

## Hierarchy

- `default`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }\>

  ↳ **`Dashboard`**

## Table of contents

### Constructors

- [constructor](../wiki/Dashboard#constructor)

### Accessors

- [instance](../wiki/Dashboard#instance)
- [isReady](../wiki/Dashboard#isready)
- [wnd](../wiki/Dashboard#wnd)

### Methods

- [emit](../wiki/Dashboard#emit)
- [load](../wiki/Dashboard#load)
- [off](../wiki/Dashboard#off)
- [on](../wiki/Dashboard#on)
- [once](../wiki/Dashboard#once)
- [removeAllListeners](../wiki/Dashboard#removealllisteners)
- [unload](../wiki/Dashboard#unload)

## Constructors

### constructor

• **new Dashboard**(`options`, `service?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../wiki/Exports#widgetoptions) | `undefined` | Widget options |
| `service` | [`Service`](../wiki/Exports#service) | `''` | The page to load after logging in |

#### Overrides

Widget&lt;{
  &#x27;dashboard.READY&#x27;: void;
  &#x27;dashboard.NAVIGATE&#x27;: string;
}\&gt;.constructor

#### Defined in

[dashboard.ts:15](https://github.com/iotum/callbridge-js/blob/c07ca62/src/dashboard.ts#L15)

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
| `K` | extends `EventKey`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `data?` | { `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }[`K`] |

#### Returns

`boolean`

#### Inherited from

Widget.emit

#### Defined in

[widget.ts:249](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L249)

___

### load

▸ **load**(`service`): `void`

Loads the service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | [`Service`](../wiki/Exports#service) | the service to load. |

#### Returns

`void`

#### Defined in

[dashboard.ts:44](https://github.com/iotum/callbridge-js/blob/c07ca62/src/dashboard.ts#L44)

___

### off

▸ **off**<`K`\>(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }[`K`]\> |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.off

#### Defined in

[widget.ts:230](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L230)

___

### on

▸ **on**<`K`\>(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }[`K`]\> |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.on

#### Defined in

[widget.ts:222](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L222)

___

### once

▸ **once**<`K`\>(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Adds a one-timelistener function for the event named eventName.
The next time eventName is triggered, this listener is removed and then invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `EventKey`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Listener`<{ `dashboard.NAVIGATE`: `string` ; `dashboard.READY`: `void`  }[`K`]\> |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.once

#### Defined in

[widget.ts:239](https://github.com/iotum/callbridge-js/blob/c07ca62/src/widget.ts#L239)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Dashboard`](../wiki/Dashboard)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the instance was created by some other component or module.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Dashboard`](../wiki/Dashboard)

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
