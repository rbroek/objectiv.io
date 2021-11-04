# BrowserTrackerConfig

Object used to construct BrowserTracker instances.

```typescript
type BrowserTrackerConfig = TrackerConfig & {
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
|          |                        | type    | default value | description
| :-:      | :--                    | :--     | :--           | :-- 
| optional | endpoint               | string  |               | The collector endpoint URL
| optional | trackApplicationLoaded | boolean | `true`        | Whether to track application loaded events automatically
| optional | trackURLChanges        | boolean | `true`        | Whether to track URL change events automatically

<br/>

:::info see also
- [TrackerConfig](/tracking/api-reference/core/TrackerConfig.md)
- [compareTrackerConfigs](/tracking/api-reference/common/compareTrackerConfigs.md)
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md)
:::
