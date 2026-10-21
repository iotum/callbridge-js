---
title: Getting started
category: Guides
---

# Getting started

This guide embeds a Callbridge meeting in your web app.

## Prerequisites

- **A Callbridge domain**, e.g. `your-company.callbridge.com`.
- **HTTPS.** Your app must be served over HTTPS for the widget to work, including during development.
- **An allowed host.** Your app's domain must be on the allowed list of your Callbridge domain to embed the widget.
- **Optional: Single Sign-On.** With an SSO token and host ID, the user is signed in automatically.
  Without SSO, the user signs in inside the widget.
  See [Get SSO Token and Host ID](https://github.com/iotum/iotum-samples/wiki/Get-SSO-Token-and-Host-ID-from-Postman).

## Install

```bash
npm install @iotum/callbridge-js
```

Or, without a bundler, add the script tag to the `<head>` of your page.
The widgets are then available under `window.Callbridge`.

```html
<script src="https://app.callbridge.com/packs/js/widget.js" async></script>
```

## Embed a meeting

Add a container for the widget. The widget fills its container.

```html
<div id="meeting" style="width: 800px; height: 600px"></div>
```

Create a {@link Meeting} with the meeting access code:

```ts
import { Meeting } from '@iotum/callbridge-js';

const meeting = new Meeting(
  {
    domain: 'your-company.callbridge.com',
    sso: { token: 'sso-token', hostId: 12345 },
    container: '#meeting',
  },
  '1234567', // meeting access code
  { name: 'Jane Doe', skipJoin: true },
);

meeting.on('widget.ERROR', (error) => console.error(error));
meeting.on('room.READY', () => console.log('joined'));
```

The `container` can also be an `HTMLElement`, or `window` to open the widget in a new tab.
See {@link WidgetOptions} and {@link MeetingOptions} for all options.

## Clean up

Unload the widget when your page or component is torn down:

```ts
meeting.unload();
```

A widget cannot be reused after it is unloaded; create a new one instead.
See [Widget lifecycle](./widget-lifecycle.md).

## Next steps

- [Widget lifecycle](./widget-lifecycle.md): events, visibility, React.
- [Using the dashboard](./dashboard.md): team chat, drive, contacts and meetings.
- [Joining a meeting](./meeting.md): devices, participants and pop-up windows.
- [Watching a livestream](./livestream.md): watch a meeting livestream.
- [Third-party cookies and Safari](./storage-access.md): required for embedding in Safari.
- [All events](./events.md): every event at a glance.
- [Sample apps](https://iotum.github.io/iotum-samples/) and their [source code](https://github.com/iotum/iotum-samples).
