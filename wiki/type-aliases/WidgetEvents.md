[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / WidgetEvents

# Type Alias: WidgetEvents

> **WidgetEvents**: `object`

Events emitted by every widget.

## Type declaration

#### widget.ERROR

> **ERROR**: `string`

The widget failed to load.

#### widget.LOAD

> **LOAD**: `void`

The widget is loaded and ready for messaging. May be emitted again after a storage access reload.

#### widget.STORAGE\_ACCESS\_DENIED

> **STORAGE\_ACCESS\_DENIED**: `void`

The user (or the browser) denied storage access. The widget cannot sign in.

#### widget.STORAGE\_ACCESS\_GRANTED

> **STORAGE\_ACCESS\_GRANTED**: `void`

Storage access is granted. Authentication continues; wait for `widget.LOAD` before using the widget.
It is safe to hide the widget again.

#### widget.STORAGE\_ACCESS\_REQUIRED

> **STORAGE\_ACCESS\_REQUIRED**: `object`

Third-party cookies are blocked (e.g. Safari) and the user must grant storage access.
Make the widget visible (see `toggle`) and remove any loading overlay so the user can interact with it.
Not an error: `widget.STORAGE_ACCESS_GRANTED` or `widget.STORAGE_ACCESS_DENIED` follows.

#### widget.STORAGE\_ACCESS\_REQUIRED.step

> **step**: `"request"` \| `"interaction"` \| `"retry"`

`request`: the user must click the widget button.
`interaction`: the user must click through the pop up window (or allow pop ups).
`retry`: the pop up completed, the user must click the widget button again.

#### widget.UNLOAD

> **UNLOAD**: `void`

The widget is unloading.

## Defined in

[widget.ts:130](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/widget.ts#L130)
