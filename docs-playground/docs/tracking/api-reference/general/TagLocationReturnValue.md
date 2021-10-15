# TagLocationReturnValue

[Location Taggers](/tracking/api-reference/location-taggers/overview.md) APIs return either a set of [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md) or `undefined`. The latter occurs whenever an Error is thrown. 

```typescript jsx

type TagLocationReturnValue = TaggingAttributes | undefined; 

```

:::info
Returning `undefined` in case of Errors works because it's spreadable: `{...undefined}` returns `{}`.
:::
