# BrowserTracker

Browser Tracker extends [Core Tracker](/tracking/api-reference/core/Tracker.md) with a simplified constructor and some preconfigured [Plugins](/tracking/api-reference/core/TrackerPlugins.md).

### Configuration
[BrowserTrackerConfig](/tracking/api-reference/definitions/BrowserTrackerConfig.md)

|          |                        | type                                                                 | default value
| :-:      | :--                    | :--                                                                  | :--           
| required | **applicationId**      | string                                                               |
| optional | trackerId              | string                                                               | Same value as `applicationId`
| optional | queue                  | [TrackerQueue](/tracking/api-reference/core/TrackerQueue.md)         | The result of [makeBrowserTrackerDefaultQueue](/tracking/api-reference/common/factories/makeBrowserTrackerDefaultQueue.md)
| optional | **_endpoint_**         | string                                                               |
| optional | **_transport_**        | [TrackerTransport](/tracking/api-reference/core/TrackerTransport.md) | The result of [makeBrowserTrackerDefaultTransport](/tracking/api-reference/common/factories/makeBrowserTrackerDefaultTransport.md)
| optional | plugins                | [TrackerPlugins](/tracking/api-reference/core/TrackerPlugins.md)     | TrackerPlugins initiated with the result of [makeBrowserTrackerDefaultPluginList](/tracking/api-reference/common/factories/makeBrowserTrackerDefaultPluginList.md)
| optional | console                | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)     |
| optional | active                 | boolean                                                              | `true`
| optional | trackApplicationLoaded | boolean                                                              | `true`
| optional | trackURLChanges        | boolean                                                              | `true`

:::caution
`endpoint` and `transport` are mutually exclusive. While both optional, either one must be specified.
:::
### Transport
[Fetch](/tracking/api-reference/transports/FetchAPITransport.md) + [XMLHttpRequest](/tracking/api-reference/transports/XMLHttpRequestTransport.md) Transport Switch.

### Queueing
TrackerQueue is configured to send events in batches of 10 every 100ms.  

### Persistence
TrackerQueue is configured to use [LocalStorage](/tracking/api-reference/queues/TrackerQueueLocalStorageStore.md) to ensure events are persisted across sessions.

### Retry logic
Configured for 10 retries with exponential backoff starting at 1000ms.

### Plugins
- [ApplicationContextPlugin](/tracking/api-reference/core/TrackerPlugins.md#applicationcontextplugin)
- [WebDocumentContextPlugin](/tracking/api-reference/core/TrackerPlugins.md#webdocumentcontextplugin)

## Under the hood
To get an idea of how much Browser Tracker automates under the hood, this statement:

```typescript
 const tracker = new BrowserTracker({ applicationId: 'app-id', endpoint: '/endpoint', console: console });
``` 

is equivalent to:

```typescript
 
 const trackerId = trackerConfig.trackerId ?? trackerConfig.applicationId;
 const console = trackerConfig.console;
 const fetch = new FetchAPITransport({ endpoint: '/endpoint', console });
 const xmlHttpRequest = new XMLHttpRequestTransport({ endpoint: '/endpoint', console });
 const transportSwitch = new TransportSwitch({ transports: [fetch, xmlHttpRequest], console });
 const transport = new RetryTransport({ transport: transportSwitch, console });
 const queueStorage = new TrackerQueueLocalStorageStore({ trackerId, console })
 const trackerQueue = new TrackerQueue({ storage: trackerStorage, console });
 const applicationPlugin = new ApplicationContextPlugin({ applicationId: 'app-id', console });
 const webDocumentPlugin = new WebDocumentContextPlugin({ console });
 const plugins = new TrackerPlugins({ plugins: [ applicationPlugin, webDocumentPlugin ], console });
 const tracker = new Tracker({ transport, queue, plugins, console });
```

<br />

:::info see also
- [BrowserTrackerConfig](/tracking/api-reference/definitions/BrowserTrackerConfig.md)
- [makeBrowserTrackerDefaultTransport](/tracking/api-reference/common/factories/makeBrowserTrackerDefaultTransport.md)
- [makeBrowserTrackerDefaultQueue](/tracking/api-reference/common/factories/makeBrowserTrackerDefaultQueue.md)
- [makeBrowserTrackerDefaultPluginList](/tracking/api-reference/common/factories/makeBrowserTrackerDefaultPluginList.md)
- [FetchAPITransport](/tracking/api-reference/transports/FetchAPITransport.md)
- [XMLHttpRequestTransport](/tracking/api-reference/transports/XMLHttpRequestTransport.md)
- [TrackerQueueLocalStorageStore](/tracking/api-reference/queues/TrackerQueueLocalStorageStore.md)
:::
