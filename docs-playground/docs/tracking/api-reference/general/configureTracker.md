# configureTracker

Configures a global instance of [BrowserTracker](/tracking/api-reference/interfaces/BrowserTracker.md) and stores it in `window.objectiv.tracker`. Then initiates auto-tracking.

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
`window.objectiv.tracker` is the default tracker used by all [Location Trackers](/tracking/api-reference/location-trackers/overview.md) and [Event Trackers](/tracking/api-reference/event-trackers/overview.md) trackers.
:::


## Parameters
|          |                        | type                      | default value
| :-:      | :--                    | :--                       | :--           
| required | **applicationId**      | string                    |
| optional | **_endpoint_**         | string                    |
| optional | **_transport_**        | [TrackerTransport](/todo) | [Default Browser Tracker Transport](/todo)
| optional | plugins                | [TrackerPlugins](/todo)   | [Default Browser Tracker Plugins](/todo)
| optional | trackApplicationLoaded | boolean                   | `true`
| optional | trackURLChanges        | boolean                   | `true`

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


<br />

:::info See also
- [Location Trackers](/tracking/api-reference/location-trackers/overview.md) 
- [Event Trackers](/tracking/api-reference/event-trackers/overview.md) trackers
:::
