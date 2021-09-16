# TrackLocationReturnValue

[Location Trackers](/tracking/api-reference/location-trackers/overview.md) APIs return either a set of [TrackingAttributes](/tracking/api-reference/general/TrackingAttributes.md) or `undefined`. The latter occurs whenever an Error is thrown. 

```typescript jsx

type TrackLocationReturnValue = TrackingAttributes | undefined; 

```

:::info
Returning `undefined` in case of Errors works because it's spreadable: `{...undefined}` returns `{}`.
:::
