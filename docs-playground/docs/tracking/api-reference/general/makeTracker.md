# makeTracker

Creates a new [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md) and adds it to the [TrackerRepository](/tracking/api-reference/general/TrackerRepository.md). Then initiates [auto-tracking](/tracking/api-reference/low-level/startAutoTracking.md) for it.

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
The first created Tracker is automatically set as default in the [TrackerRepository](/tracking/api-reference/general/TrackerRepository.md). See also [getTracker](/tracking/api-reference/general/getTracker.md) and [setDefaultTracker](/tracking/api-reference/general/setDefaultTracker.md)
:::


## Parameters
|          |                        | type                                                                             | default value
| :-:      | :--                    | :--                                                                              | :--           
| required | **applicationId**      | string                                                                           |
| optional | **trackerId**          | string                                                                           | `applicationId`
| optional | **_endpoint_**         | string                                                                           |
| optional | **_transport_**        | [TrackerTransport](/tracking/core-concepts/tracker-architecture.md#transport)    | [Default Browser Tracker Transport](/tracking/api-reference/general/BrowserTracker.md#default-transport)
| optional | plugins                | [TrackerPlugins](/tracking/core-concepts/tracker-architecture.md#plugins)        | [Default Browser Tracker Plugins](/tracking/api-reference/general/BrowserTracker.md#default-plugins)
| optional | console                | [TrackerConsole](/tracking/core-concepts/tracker-architecture.md#trackerconsole) |
| optional | trackApplicationLoaded | boolean                                                                          | `true`
| optional | trackURLChanges        | boolean                                                                          | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.
:::

## Returns
 - [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)

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
[Events](/taxonomy/events/overview.md) are sent to the [Collector](/tracking/core-concepts/collector-architecture.md) via a composable layer of queueing, batching and sending classes called [Transport](/tracking/core-concepts/tracker-architecture.md#transport). 
:::

<br />

:::info See also
- [Location Taggers](/tracking/api-reference/location-taggers/overview.md) 
- [Event Trackers](/tracking/api-reference/event-trackers/overview.md)
- [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)
- [Transport](/tracking/core-concepts/tracker-architecture.md#transport)
- [Collector](/tracking/core-concepts/collector-architecture.md)
- [startAutoTracking](/tracking/api-reference/low-level/startAutoTracking.md)
:::
