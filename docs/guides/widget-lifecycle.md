---
title: Widget lifecycle
category: Guides
---

# Widget lifecycle

Every widget ({@link Dashboard}, {@link Meeting}, {@link Livestream}) shares the same lifecycle,
methods and {@link WidgetEvents}.

## Loading

Creating a widget immediately adds an iframe to the container (or opens a tab when the container is `window`).
Subscribe to events right after creating the widget:

| Event                                               | When                                                                                                |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `widget.LOAD`                                       | The widget page is loaded and can receive messages. Emitted before each `*.READY` event.            |
| `dashboard.READY`, `room.READY`, `livestream.READY` | The widget is ready to use. Call widget methods after this.                                         |
| `widget.ERROR`                                      | The widget failed to load, e.g. the user is not authorized.                                         |
| `widget.STORAGE_ACCESS_REQUIRED`                    | The browser blocks the widget's cookies. See [Third-party cookies and Safari](./storage-access.md). |

```ts
const dashboard = new Dashboard(options);
dashboard.on('widget.ERROR', (error) => showError(error));
dashboard.once('dashboard.READY', () => dashboard.load(Service.Team));
```

{@link Widget.isReady} tells whether the widget is ready.

## Showing and hiding

{@link Widget.toggle} shows or hides the iframe without unloading it, e.g. to switch between tabs of your app.
It is not available when the widget is in a separate tab or window.

```ts
dashboard.toggle(false); // keep the widget loaded in the background
dashboard.toggle(true);
```

A hidden widget still emits events, e.g. to keep an unread message badge up to date.

A detached container (an element that is not in the document) is appended to the document, and the widget starts hidden.
This is useful for a widget that only provides events, e.g. unread message counts.

## Unloading

{@link Widget.unload} removes the iframe, or closes the tab. Always unload the widget when your page or component
is torn down, otherwise the iframe and its event listeners are left behind.

The widget also unloads itself, and emits `widget.UNLOAD`, when its content is unloading, e.g.:

- a {@link Meeting} ends (`room.UNLOAD`);
- a meeting loaded inline in a {@link Dashboard} ends (`room.UNLOAD`); create a new `Dashboard` to show it again.

A widget cannot be reused after it is unloaded; create a new one.

## React

Create the widget in an effect and unload it in the cleanup.
`unload()` is safe to call before the widget is loaded, which happens with React `StrictMode` in development.

```tsx
import { useEffect, useRef } from 'react';
import { Meeting } from '@iotum/callbridge-js';

function MeetingRoom({ domain, token, hostId, accessCode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const meeting = new Meeting(
      { domain, sso: { token, hostId }, container: container.current! },
      accessCode,
    );
    meeting.on('widget.ERROR', console.error);
    return () => meeting.unload();
  }, [domain, token, hostId, accessCode]);

  return <div ref={container} style={{ width: '100%', height: 600 }} />;
}
```

## Errors

| Error                                             | Cause                                                                 |
| ------------------------------------------------- | --------------------------------------------------------------------- |
| `Unable to locate the container element` (thrown) | The `container` selector does not match an element.                   |
| `Missing SSO parameters` (thrown)                 | `sso` is set without both `token` and `hostId`.                       |
| `widget.ERROR` event                              | The widget could not be loaded or opened, e.g. a pop-up is blocked.   |
| `dashboard.SESSION_EXPIRED` event                 | The user's session has expired. Create a new widget to sign in again. |
