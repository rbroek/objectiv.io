# TagLocationReturnValue

[Location Taggers](/tracking/api-reference/locationTaggers/overview.md) APIs return either a set of [TaggingAttributes](/tracking/api-reference/globals/TaggingAttributes.md) or `undefined`. The latter occurs whenever an Error is thrown. 

```typescript jsx

type TagLocationReturnValue = StringifiedLocationTaggingAttributes | undefined; 

```

:::info
Returning `undefined` in case of Errors works because it's spreadable: `{...undefined}` returns `{}`.
:::
