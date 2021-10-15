# TrackerOnErrorCallback

The `onError` parameter of [Location Taggers](/tracking/api-reference/location-taggers/overview.md) APIs is a callback that gets invoked when Errors are caught during tracking. 

```typescript jsx

type TrackerOnErrorCallback = <T = unknown>(error: unknown, parameters?: T) => void

```
:::info
`onError` is optional for all [Location Taggers](/tracking/api-reference/location-taggers/overview.md) APIs. It's default value is simply `console.error`.
:::