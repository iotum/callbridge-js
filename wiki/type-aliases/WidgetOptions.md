[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / WidgetOptions

# Type Alias: WidgetOptions

> **WidgetOptions**: `object`

Widget options.

## Type declaration

### container

> **container**: `Window` \| `HTMLElement` \| `string`

The container for the widget.
Supports attached or detached DOM element, document selector, or `window` (new tab).
If the element is detached, it will be set to invisible and attached to the main document.

### domain

> **domain**: `string`

The Callbridge domain of the user.

### sso?

> `optional` **sso**: `object`

Optional, Single Sign-On

#### sso.hostId?

> `optional` **hostId**: `number`

Optional account number of the user.

#### sso.token?

> `optional` **token**: `string`

Optional host-specific authorization token.

### target?

> `optional` **target**: `object`

Optional, options for `window.open` when `container` is `window`.

#### See

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open).

#### target.autoClose?

> `optional` **autoClose**: `boolean`

Whether to close the popup when the meeting is over.

#### target.checkExisting?

> `optional` **checkExisting**: `boolean`

Whether to wait (up to 1.5 sec) for the existing widget.
Requires a matching "window target name".

#### target.features?

> `optional` **features**: `string`

The window features.

#### target.name?

> `optional` **name**: `string`

The window target name.

## Defined in

[widget.ts:11](https://github.com/iotum/callbridge-js/blob/d0dfc94e8f5dfc8239b4ec067f283823bb09beee/src/widget.ts#L11)
