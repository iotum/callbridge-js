/**
 * Embed Callbridge meetings, team chat, drive, contacts and livestreams in your web app.
 *
 * @example
 * ```ts
 * import { Meeting } from '@iotum/callbridge-js';
 *
 * const meeting = new Meeting(
 *   { domain: 'your-company.callbridge.com', container: '#meeting' },
 *   '1234567',
 * );
 * ```
 * @module
 */
export {
  default as Widget,
  type WidgetOptions,
  type WidgetEvents,
  type EventMap,
  type EventKey,
  type Listener,
} from './widget';
export {
  default as Dashboard,
  Service,
  LayoutOption,
  MeetingAction,
  ScheduleAction,
  SearchContentType,
  type DashboardEvents,
  type ServiceOptions,
  type ChatRoom,
  type SearchOptions,
} from './dashboard';
export { default as Room, type RoomEvents, type AudioSettings } from './room';
export {
  default as Meeting,
  type MeetingOptions,
  type ScheduleOptions,
} from './meeting';
export {
  default as Livestream,
  type LivestreamEvents,
  type LivestreamOptions,
} from './livestream';
