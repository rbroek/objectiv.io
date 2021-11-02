### ChildrenTaggingQuery parameter
An object pairing a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string to a set of [TaggingAttributes](/tracking/api-reference/globals/TaggingAttributes.md).

[Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer) executes `queryAll` via [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). Matches are decorated with `trackAs` attributes.

```typescript
type ChildrenTaggingQuery = {
  queryAll: string,
  trackAs: TaggingAttributes,
}
```
