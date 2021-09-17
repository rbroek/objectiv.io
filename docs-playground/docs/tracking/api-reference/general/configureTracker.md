# configureTracker

Configures a global instance of [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md) and stores it in `window.objectiv.tracker`. Then initiates [auto-tracking](/tracking/api-reference/low-level/startAutoTracking.md).

```typescript
configureTracker = (parameters: {
  applicationId: string,
  endpoint?: string,
  transport?: TrackerTransport,
  plugins?: TrackerPlugins,
  trackApplicationLoaded?: boolean,
  trackURLChanges?: boolean;
}) => void
```

:::info
`window.objectiv.tracker` is the default tracker instance used by all [Location Trackers](/tracking/api-reference/location-trackers/overview.md) and [Event Trackers](/tracking/api-reference/event-trackers/overview.md).
:::


## Parameters
|          |                        | type                                                                          | default value
| :-:      | :--                    | :--                                                                           | :--           
| required | **applicationId**      | string                                                                        |
| optional | **_endpoint_**         | string                                                                        |
| optional | **_transport_**        | [TrackerTransport](/tracking/core-concepts/tracker-architecture.md#transport) | [Default Browser Tracker Transport](/tracking/api-reference/general/BrowserTracker.md#default-transport)
| optional | plugins                | [TrackerPlugins](/tracking/core-concepts/tracker-architecture.md#plugins)     | [Default Browser Tracker Plugins](/tracking/api-reference/general/BrowserTracker.md#default-plugins)
| optional | trackApplicationLoaded | boolean                                                                       | `true`
| optional | trackURLChanges        | boolean                                                                       | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.
:::

## Returns
`configureTracker` is a void function.

## Usage example

```typescript jsx
configureTracker({
  applicationId: 'awesome-app',
  endpoint: 'https://collector.awesome-app.dev' 
})
```

```typescript jsx
configureTracker({
  applicationId: 'awesome-app',
  transport: CustomTransport 
})
```

:::tip Transport ?
[Events](/taxonomy/events/overview.md) are sent to the [Collector](/tracking/core-concepts/collector-architecture.md) via a composable layer of queueing, batching and sending classes called [Transport](/tracking/core-concepts/tracker-architecture.md#transport). 
:::

<br />

:::info See also
- [Location Trackers](/tracking/api-reference/location-trackers/overview.md) 
- [Event Trackers](/tracking/api-reference/event-trackers/overview.md)
- [Transport](/tracking/core-concepts/tracker-architecture.md#transport)
- [Collector](/tracking/core-concepts/collector-architecture.md)
- [startAutoTracking](/tracking/api-reference/low-level/startAutoTracking.md)
:::
