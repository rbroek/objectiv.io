# makeTracker

Creates a new [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md) and adds it to the [TrackerRepository](/tracking/api-reference/globals/TrackerRepository.md). Then initiates [auto-tracking](/tracking/api-reference/low-level/startAutoTracking.md) for it.

```typescript
makeTracker = (parameters: {
  applicationId: string,
  trackerId?: string,
  endpoint?: string,
  transport?: TrackerTransport,
  plugins?: TrackerPlugins,
  trackApplicationLoaded?: boolean,
  trackURLChanges?: boolean;
}) => BrowserTracker
```

:::info
The first created Tracker is automatically set as default in the [TrackerRepository](/tracking/api-reference/globals/TrackerRepository.md). See also [getTracker](/tracking/api-reference/globals/getTracker.md) and [setDefaultTracker](/tracking/api-reference/globals/setDefaultTracker.md)
:::


## Parameters
|          |                        | type                                                                             | default value
| :-:      | :--                    | :--                                                                              | :--           
| required | **applicationId**      | string                                                                           |
| optional | **trackerId**          | string                                                                           | `applicationId`
| optional | **_endpoint_**         | string                                                                           |
| optional | **_transport_**        | [TrackerTransport](/tracking/core-concepts/trackers.md#transport)    | [Default Browser Tracker Transport](/tracking/api-reference/globals/BrowserTracker.md#default-transport)
| optional | plugins                | [TrackerPlugins](/tracking/core-concepts/trackers.md#plugins)        | [Default Browser Tracker Plugins](/tracking/api-reference/globals/BrowserTracker.md#default-plugins)
| optional | console                | [TrackerConsole](/tracking/core-concepts/trackers.md#trackerconsole) |
| optional | trackApplicationLoaded | boolean                                                                          | `true`
| optional | trackURLChanges        | boolean                                                                          | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.
:::

## Returns
 - [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md)

## Usage example

```typescript jsx
import { makeTracker } from '@objectiv/tracker-browser';
```

```typescript jsx
makeTracker({
  applicationId: 'awesome-app',
  endpoint: 'https://collector.awesome-app.dev' 
})
```

```typescript jsx
makeTracker({
  applicationId: 'awesome-app',
  transport: CustomTransport,
  console: window.console
})
```

:::tip Transport ?
[Events](/taxonomy/events/overview.md) are sent to the [Collector](/tracking/core-concepts/collector.md) via a composable layer of queueing, batching and sending classes called [Transport](/tracking/core-concepts/trackers.md#transport). 
:::

<br />

:::info See also
- [Location Taggers](/tracking/api-reference/locationTaggers/overview.md) 
- [Event Trackers](/tracking/api-reference/eventTrackers/overview.md)
- [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md)
- [Transport](/tracking/core-concepts/trackers.md#transport)
- [Collector](/tracking/core-concepts/collector.md)
- [startAutoTracking](/tracking/api-reference/low-level/startAutoTracking.md)
:::
