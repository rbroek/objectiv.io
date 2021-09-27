# tagChildren

Marks an [Element](/tracking/core-concepts/elements.md#elements) as a root to track one or more of its children by specifying a set of **TrackChildrenQuery** objects.

```typescript
tagChildren = (parameters: TrackChildrenQuery[]) => TagLocationReturnValue
```

:::warning
`tagChildren` is a performance-sensitive API. Avoid using it whenever [Location Taggers](/tracking/api-reference/location-taggers/overview.md) could be used instead.
:::

### TrackChildrenQuery parameter
An object pairing a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string to a set of [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md).

[Tracked Elements Observer](/tracking/core-concepts/tracker-architecture.md#tagged-elements-observer) executes `queryAll` via [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). Matches are decorated with `trackAs` attributes.

```typescript
type TrackChildrenQuery = {
  queryAll: string,
  trackAs: TaggingAttributes,
}
```

|          |              | type
| :-:      | :--          | :--                                                                                       
| required | **queryAll** | [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string
| required | **trackAs**  | [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md)

## Single query shorthand
Syntactic sugar API built on top of **tagChildren** which processes a single TrackChildrenQuery.

```typescript
trackChild = (parameters: TrackChildrenQuery) => TagLocationReturnValue
```

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md) with only the `tagChildren` attribute set.

## Usage example

```typescript jsx
<div
  {...tagChildren([
    {
      queryAll: 'button[aria-label="Previous"]',
      trackAs: tagButton({ id: 'prev', text: 'Previous' })
    },
    {
      queryAll: 'button[aria-label="Next"]',
      trackAs: tagButton({ id: 'next', text: 'Next' })
    }
  ])}
>
  <ThirdPartyBlackBox />
</div>
```

<br />

:::info See also
- [Location Taggers](/tracking/api-reference/location-taggers/overview.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [Tracked Elements Observer](/tracking/core-concepts/tracker-architecture.md#tagged-elements-observer)
:::
