# TaggableElement

Either an [HTMLElement](#TODO) or an [SVGElement](#TODO).

```typescript
type TaggableElement = HTMLElement | SVGElement;
```

:::tip Why not simply Element?
Elements are too broad and include things like comment blocks that don't support dataset attributes.
Type Guards, like [isTaggableElement](/tracking/api-reference/common/guards/isTaggableElement.md), are designed to
filter out anything that doesn't support [Tagging Attributes](/tracking/api-reference/definitions/TaggingAttribute.md).
:::

:::info see also
- [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md)
- [TaggedElement](/tracking/api-reference/definitions/TaggedElement.md)
- [isTaggableElement](/tracking/api-reference/common/guards/isTaggableElement.md)
- [Tagging Attributes](/tracking/api-reference/definitions/TaggingAttribute.md)
:::
