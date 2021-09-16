# TrackerOnErrorCallback

The `onError` parameter of [Location Trackers](/tracking/api-reference/location-trackers/overview.md) APIs is a callback that gets invoked when Errors are caught during tracking. 

```typescript jsx

type TrackerOnErrorCallback = <T = unknown>(error: unknown, parameters?: T) => void

```
:::info
`onError` is optional for all [Location Trackers](/tracking/api-reference/location-trackers/overview.md) APIs. It's default value is simply `console.error`.
:::