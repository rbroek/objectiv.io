# BrowserTrackerConfig

Object used to construct BrowserTracker instances. 

BrowserTrackerConfig extends the Core [TrackerConfig](/tracking/api-reference/core/TrackerConfig.md). 

```typescript
type BrowserTrackerConfig = TrackerConfig & {
  endpoint?: string;
  trackApplicationLoaded?: boolean;
  trackURLChanges?: boolean;
};
```

The resulting complete definition is:
```typescript
type BrowserTrackerConfig = {
  applicationId: string;
  trackerId?: string;
  queue?: TrackerQueueInterface;
  transport?: TrackerTransportInterface;
  plugins?: TrackerPlugins;
  console?: TrackerConsole;
  active?: boolean;  
  endpoint?: string;
  trackApplicationLoaded?: boolean;
  trackURLChanges?: boolean;
};
```

:::info
Browser Tracker can be configured in an easier way, as opposed to the Core Tracker, by specifying just an `endpoint`.  
Internally it will automatically configure the Transport layer for the given `endpoint` with sensible defaults.
:::

## Attributes
|           |          |                        | type                                                                 | default value
| :--       | :-:      | :--                    | :--                                                                  | :--           
| inherited | required | **applicationId**      | string                                                               |
| inherited | optional | trackerId              | string                                                               | Same value as `applicationId`
| inherited | optional | queue                  | [TrackerQueue](/tracking/api-reference/core/TrackerQueue.md)         | The result of [makeDefaultQueue](/tracking/api-reference/common/factories/makeDefaultQueue.md)
| inherited | optional | **_transport_**        | [TrackerTransport](/tracking/api-reference/core/TrackerTransport.md) | The result of [makeDefaultTransport](/tracking/api-reference/common/factories/makeDefaultTransport.md)
| inherited | optional | plugins                | [TrackerPlugins](/tracking/api-reference/core/TrackerPlugins.md)     | TrackerPlugins initiated with the result of [makeDefaultPluginsList](/tracking/api-reference/common/factories/makeDefaultPluginsList.md)
| inherited | optional | console                | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)     |
| inherited | optional | active                 | boolean                                                              | `true`
| own       | optional | **_endpoint_**         | string                                                               |
| own       | optional | trackApplicationLoaded | boolean                                                              | `true`
| own       | optional | trackURLChanges        | boolean                                                              | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.

When providing only `endpoint`, the Tracker will automatically create a Transport configuration initialized with it.
:::

<br/>

:::info see also
- [TrackerConfig](/tracking/api-reference/core/TrackerConfig.md)
- [compareTrackerConfigs](/tracking/api-reference/common/compareTrackerConfigs.md)
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md)
:::
