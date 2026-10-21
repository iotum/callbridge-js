[**@iotum/callbridge-js**](../README.md)

***

[@iotum/callbridge-js](../README.md) / ServiceOptions

# Type Alias: ServiceOptions

> **ServiceOptions**: `object`

Dashboard service options.

## Type declaration

### hiddenElements?

> `optional` **hiddenElements**: `number`[]

The UI elements to be hidden.

### invitedContacts?

> `optional` **invitedContacts**: `number`[]

The invited contact IDs. ("meeting schedule" only)

### invitedHosts?

> `optional` **invitedHosts**: `number`[]

The invited host IDs. ("meeting schedule" only)

### layout?

> `optional` **layout**: [`LayoutOption`](../enumerations/LayoutOption.md)

The service layout.

### meetingAction?

> `optional` **meetingAction**: [`MeetingAction`](../enumerations/MeetingAction.md)

The meeting action.

### pathname?

> `optional` **pathname**: `string`

The initial path to load.

### scheduleAction?

> `optional` **scheduleAction**: [`ScheduleAction`](../enumerations/ScheduleAction.md)

The schedule action.

## Defined in

[dashboard.ts:61](https://github.com/iotum/callbridge-js/blob/36bf4be5ee45757dce6a573d6cea5ad1eb049f4a/src/dashboard.ts#L61)
