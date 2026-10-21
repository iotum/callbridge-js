---
title: Watching a livestream
category: Guides
---

# Watching a livestream

The {@link Livestream} plays the livestream of a meeting, with the meeting access code.

```ts
import { Livestream } from '@iotum/callbridge-js';

const livestream = new Livestream(
  { domain: 'your-company.callbridge.com', container: '#livestream' },
  '1234567',
  { name: 'Viewer', chat: true },
);

livestream.on('livestream.READY', () => console.log('ready'));
```

See {@link LivestreamOptions} for all options.

## Using your own chat

Set {@link LivestreamOptions.chat} to `'intercept'` to handle chat in your app.
`livestream.LIVE_STREAM_INTERCEPT_CHAT` is emitted when the viewer tries to chat:

```ts
const livestream = new Livestream(options, '1234567', { chat: 'intercept' });
livestream.on('livestream.LIVE_STREAM_INTERCEPT_CHAT', () => openChat());
```
