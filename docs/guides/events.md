---
title: All events
category: Guides
---

# All events

Subscribe with {@link Widget.on}, {@link Widget.once} and {@link Widget.off}.
Event names and payloads are typed: your editor completes them for each widget.

```ts
widget.on('dashboard.UNREAD_MESSAGES', ({ rooms }) => updateBadge(rooms));
```

## Every widget

See {@link WidgetEvents}.

| Event                            | When                                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| `widget.LOAD`                    | The widget page is loaded and can receive messages.                                            |
| `widget.UNLOAD`                  | The widget is unloading.                                                                       |
| `widget.ERROR`                   | The widget failed to load.                                                                     |
| `widget.STORAGE_ACCESS_REQUIRED` | The user must grant storage access. See [Third-party cookies and Safari](./storage-access.md). |
| `widget.STORAGE_ACCESS_GRANTED`  | Storage access is granted.                                                                     |
| `widget.STORAGE_ACCESS_DENIED`   | Storage access is denied.                                                                      |

## Dashboard

See {@link DashboardEvents} and the [Dashboard guide](./dashboard.md).

| Event                            | When                                                                |
| -------------------------------- | ------------------------------------------------------------------- |
| `dashboard.READY`                | The dashboard is ready.                                             |
| `dashboard.UNLOAD`               | The dashboard is unloading.                                         |
| `dashboard.SESSION_EXPIRED`      | The user's session has expired.                                     |
| `dashboard.NAVIGATE`             | The user navigated within the dashboard.                            |
| `dashboard.ROOM_LIST`            | The chat rooms are loaded or changed (Team).                        |
| `dashboard.UNREAD_MESSAGES`      | The unread message counts are changed (Team).                       |
| `dashboard.NAVIGATE_TO_CALL`     | The user started or joined a meeting (`meetingAction: intercept`).  |
| `dashboard.NAVIGATE_TO_SCHEDULE` | The user wants to schedule a meeting (`scheduleAction: intercept`). |
| `dashboard.SEARCH_START`         | A search is started (Search).                                       |
| `dashboard.SEARCH_RESULT`        | A search is completed or failed (Search).                           |
| `dashboard.BOT_MESSAGE`          | The user sent a chat bot command (Team, `bot: true`).               |
| `dashboard.BOT_MESSAGE_REJECTED` | A chat bot reply was not posted.                                    |
| `room.READY`                     | A meeting is loaded inline.                                         |
| `room.UNLOAD`                    | The inline meeting is unloading; the dashboard is unloaded too.     |

## Meeting

See {@link RoomEvents} and the [Meeting guide](./meeting.md).

| Event                             | When                                                               |
| --------------------------------- | ------------------------------------------------------------------ |
| `room.READY`                      | The meeting room is ready.                                         |
| `room.UNLOAD`                     | The meeting room is unloading; the widget is unloaded too.         |
| `device.DEVICE_LIST_CHANGED`      | The available media devices are changed.                           |
| `device.DEVICE_IN_USE`            | A media device is selected.                                        |
| `conference.CHANGE`               | The meeting state is changed.                                      |
| `conference.SPEAKER`              | The active speaker is changed.                                     |
| `conference.CONFERENCE_CALL_EXIT` | The user left the meeting.                                         |
| `participant.CHANGE`              | A participant joined, left or changed.                             |
| `participant.AUDIO_LEVEL`         | The audio level of a participant is changed (`audioLevel` option). |

## Livestream

See {@link LivestreamEvents} and the [Livestream guide](./livestream.md).

| Event                                   | When                                            |
| --------------------------------------- | ----------------------------------------------- |
| `livestream.READY`                      | The livestream viewer is ready.                 |
| `livestream.LIVE_STREAM_INTERCEPT_CHAT` | The viewer tried to chat (`chat: 'intercept'`). |
