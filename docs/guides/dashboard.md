---
title: Using the dashboard
category: Guides
---

# Using the dashboard

The {@link Dashboard} embeds the Callbridge services:

| {@link Service} | Content                                           |
| --------------- | ------------------------------------------------- |
| `Team`          | Team chat: rooms, channels and direct messages.   |
| `Drive`         | Content library.                                  |
| `Contacts`      | Address book.                                     |
| `Meet`          | Meetings: list, schedule, start and join.         |
| `Search`        | Search meetings and calls. See [Search](#search). |
| `None`          | Only sign in; load a service later.               |

```ts
import { Dashboard, Service } from '@iotum/callbridge-js';

const dashboard = new Dashboard(
  {
    domain: 'your-company.callbridge.com',
    sso: { token: 'sso-token', hostId: 12345 },
    container: '#dashboard',
  },
  Service.Team,
);
```

## Switching services

Use one dashboard for several services, e.g. as tabs of your app, and switch with {@link Dashboard.load}
once the dashboard is ready:

```ts
dashboard.load(Service.Drive);
dashboard.load(Service.Meet, { pathname: '/schedule' }); // open the scheduler
```

{@link Dashboard.go} navigates the dashboard's history, like the browser back and forward buttons.
`dashboard.NAVIGATE` is emitted whenever the user navigates within the dashboard.

## Layouts

For `Team` and `Drive`, {@link ServiceOptions.layout} shows only part of the UI:

| {@link LayoutOption} | Shows                                           |
| -------------------- | ----------------------------------------------- |
| `full`               | Sidebar and content (default).                  |
| `list`               | Only the sidebar, e.g. the list of chat rooms.  |
| `main`               | Only the content, e.g. a single chat room.      |
| `none`               | Nothing; use the dashboard for its events only. |

## Team chat

### Chat room list and unread counts

With {@link Service.Team}, the dashboard emits the chat rooms and unread message counts.
Use them to build your own room list or an unread badge:

```ts
dashboard.on('dashboard.ROOM_LIST', ({ rooms, channels }) => {
  renderRooms(Object.values(rooms), Object.values(channels));
});

dashboard.on('dashboard.UNREAD_MESSAGES', ({ rooms }) => {
  const total = Object.values(rooms).reduce((sum, count) => sum + count, 0);
  badge.textContent = String(total);
});
```

A hidden dashboard (see {@link Widget.toggle}) keeps emitting these events.

### Opening a chat room

Open a single room from your own UI with its {@link ChatRoom.path} and the `main` layout:

```ts
const chat = new Dashboard(options, Service.Team, {
  layout: LayoutOption.main,
  pathname: room.path,
});
```

Or, in an existing dashboard: `dashboard.load(Service.Team, { pathname: room.path })`.

### Chat bot

With {@link ServiceOptions.bot}, your app can answer slash commands typed in Team chat, e.g. `/weather Toronto`:

1. The user sends a message starting with `/` in a chat room. It is not posted;
   `dashboard.BOT_MESSAGE` is emitted with the message `id`, its text and the `room_id`.
2. Your app replies with {@link Dashboard.replyToBotMessage}. The reply is posted to that room as the user.

```ts
const dashboard = new Dashboard(options, Service.Team, { bot: true });

dashboard.on('dashboard.BOT_MESSAGE', async ({ id, message, room_id }) => {
  const [command, ...args] = message.split(' ');
  if (command === '/weather') {
    const forecast = await getForecast(args.join(' '));
    dashboard.replyToBotMessage(
      id,
      `**${forecast.city}**: ${forecast.summary}`,
    );
  }
});

dashboard.on('dashboard.BOT_MESSAGE_REJECTED', ({ id, reason }) => {
  console.warn('bot reply rejected', id, reason);
});
```

- Reply within **30 seconds**, once per message, while the same user is signed in.
  Otherwise the reply is not posted and `dashboard.BOT_MESSAGE_REJECTED` is emitted with the `reason`.
- Commands you don't answer are dropped; nothing is posted.
- `room_id` is a key of `rooms` or `channels` in `dashboard.ROOM_LIST`.
- Once enabled, the bot stays enabled until the browser tab is closed.

## Meetings

By default ({@link MeetingAction.auto}), starting or joining a meeting from the dashboard loads the meeting room
inside the dashboard. When that meeting ends, `room.UNLOAD` is emitted and the dashboard is unloaded;
create a new dashboard to show it again:

```ts
function createDashboard() {
  const dashboard = new Dashboard(options, Service.Meet);
  dashboard.on('room.UNLOAD', () => {
    current = createDashboard();
  });
  return dashboard;
}
let current = createDashboard();
```

Set {@link ServiceOptions.meetingAction} to change this:

- {@link MeetingAction.popup}: open the meeting in a new tab or window.
- {@link MeetingAction.intercept}: emit `dashboard.NAVIGATE_TO_CALL` instead, and join the meeting yourself,
  e.g. with a {@link Meeting} elsewhere in your app:

```ts
const dashboard = new Dashboard(options, Service.Meet, {
  meetingAction: MeetingAction.intercept,
});

dashboard.on(
  'dashboard.NAVIGATE_TO_CALL',
  ({ accessCode, options: meetingOptions }) => {
    new Meeting(
      { ...options, container: '#meeting' },
      accessCode,
      meetingOptions,
    );
  },
);
```

Similarly, {@link ScheduleAction.intercept} emits `dashboard.NAVIGATE_TO_SCHEDULE` instead of opening the scheduler.

When scheduling, {@link ServiceOptions.invitedContacts} and {@link ServiceOptions.invitedHosts} pre-fill the invitees:

```ts
dashboard.load(Service.Meet, { pathname: '/schedule', invitedContacts: [42] });
```

## Search

Create the dashboard with {@link Service.Search} to search meetings and calls with {@link Dashboard.search}:

```ts
const search = new Dashboard(options, Service.Search);

search.on('dashboard.SEARCH_RESULT', ({ result, error }) => {
  if (error) return showError(error);
  render(result); // [{ contentType, id, highlight }]
});

search.on('dashboard.SEARCH_START', ({ query, filters }) => {
  showSearching(query, filters); // e.g. 'review', { participant: ['alice'] }
});

search.once('dashboard.READY', () => {
  search.search('quarterly review', { order: 'relevance' });
});
```

The query supports the same `field:value` terms as the Callbridge search box, e.g.
`review participant:alice after:2026-01-01`. `dashboard.SEARCH_START` reports the free-text part as `query`
and the terms as `filters`. `dashboard.SEARCH_RESULT` includes the same `query`, to match results to searches.

## Hiding UI elements

{@link ServiceOptions.hiddenElements} and {@link Dashboard.setHiddenElements} hide parts of the dashboard UI.

## Session expiry

`dashboard.SESSION_EXPIRED` is emitted when the user's session has expired. Create a new dashboard to sign in again.

## Samples

- [Tabbed dashboard](https://github.com/iotum/iotum-samples/tree/main/src/pages/tabbed-dashboard)
- [Chat room list](https://github.com/iotum/iotum-samples/tree/main/src/pages/chat-room-list)
- [List widget](https://github.com/iotum/iotum-samples/tree/main/src/pages/list-widget-ui)
- [Popout chat](https://github.com/iotum/iotum-samples/tree/main/src/pages/popout-chat)
