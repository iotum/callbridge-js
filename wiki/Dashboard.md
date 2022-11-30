# Class: Dashboard

Callbridge Dashboard.

## Hierarchy

- `default`

  ↳ **`Dashboard`**

## Table of contents

### Constructors

- [constructor](../wiki/Dashboard#constructor)

### Accessors

- [instance](../wiki/Dashboard#instance)
- [isReady](../wiki/Dashboard#isready)
- [wnd](../wiki/Dashboard#wnd)

### Methods

- [addListener](../wiki/Dashboard#addlistener)
- [loadPage](../wiki/Dashboard#loadpage)
- [off](../wiki/Dashboard#off)
- [on](../wiki/Dashboard#on)
- [removeAllListeners](../wiki/Dashboard#removealllisteners)
- [removeListener](../wiki/Dashboard#removelistener)
- [unload](../wiki/Dashboard#unload)

## Constructors

### constructor

• **new Dashboard**(`options`, `page?`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | [`WidgetOptions`](../wiki/Exports#widgetoptions) | `undefined` | Widget options |
| `page` | [`Page`](../wiki/Exports#page) | `''` | The page to load after logging in |

#### Overrides

Widget.constructor

#### Defined in

[dashboard.ts:12](https://github.com/iotum/callbridge-js/blob/9ab2941/src/dashboard.ts#L12)

## Accessors

### instance

• `get` **instance**(): ``null`` \| `Window` \| `HTMLIFrameElement`

The widget instance.

#### Returns

``null`` \| `Window` \| `HTMLIFrameElement`

#### Inherited from

Widget.instance

#### Defined in

[widget.ts:179](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L179)

___

### isReady

• `get` **isReady**(): `boolean`

Whether the widget is ready.

#### Returns

`boolean`

#### Inherited from

Widget.isReady

#### Defined in

[widget.ts:172](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L172)

___

### wnd

• `get` **wnd**(): ``null`` \| `Window`

The Window or WindowProxy instance of the widget.

#### Returns

``null`` \| `Window`

#### Inherited from

Widget.wnd

#### Defined in

[widget.ts:186](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L186)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Alias for [on](../wiki/Dashboard#on).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.addListener

#### Defined in

[widget.ts:222](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L222)

___

### loadPage

▸ **loadPage**(`page`): `void`

Loads the page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `page` | [`Page`](../wiki/Exports#page) | the page to load. |

#### Returns

`void`

#### Defined in

[dashboard.ts:33](https://github.com/iotum/callbridge-js/blob/9ab2941/src/dashboard.ts#L33)

___

### off

▸ **off**(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Alias for [removeListener](../wiki/Dashboard#removelistener).

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.off

#### Defined in

[widget.ts:210](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L210)

___

### on

▸ **on**(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Adds the `listener` function to the end of the listeners array for the event named `eventName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.on

#### Defined in

[widget.ts:198](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L198)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Dashboard`](../wiki/Dashboard)

Removes all listeners, or those of the specified `eventName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.removeAllListeners

#### Defined in

[widget.ts:246](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L246)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Dashboard`](../wiki/Dashboard)

Removes the specified `listener` from the listener array for the event named `eventName`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Dashboard`](../wiki/Dashboard)

#### Inherited from

Widget.removeListener

#### Defined in

[widget.ts:234](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L234)

___

### unload

▸ **unload**(): `void`

Unloads the widget by removing the iframe or close the tab/window.

#### Returns

`void`

#### Inherited from

Widget.unload

#### Defined in

[widget.ts:156](https://github.com/iotum/callbridge-js/blob/9ab2941/src/widget.ts#L156)
