# trackChildren

Marks an [Element](/tracking/core-concepts/elements.md#elements) as a root to track one or more of its children by specifying a set of **TrackChildrenQuery** objects.

```typescript
trackChildren = (parameters: TrackChildrenQuery[]) => TrackLocationReturnValue
```

:::warning
`trackChildren` is a performance-sensitive API. Avoid using it whenever [Location Trackers](/tracking/api-reference/location-trackers/overview.md) could be used instead.
:::

### TrackChildrenQuery parameter
An object pairing a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string to a set of [TrackingAttributes](/tracking/api-reference/interfaces/TrackingAttributes.md).

[Tracked Elements Observer](/tracking/core-concepts/tracker-architecture.md#tracked-elements-observer) executes `queryAll` via [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). Matches are decorated with `trackAs` attributes.

```typescript
type TrackChildrenQuery = {
  queryAll: string,
  trackAs: TrackingAttributes,
}
```

|          |              | type
| :-:      | :--          | :--                                                                                       
| required | **queryAll** | [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string
| required | **trackAs**  | [TrackingAttributes](/tracking/api-reference/interfaces/TrackingAttributes.md)

## Single query shorthand
Syntactic sugar API built on top of **trackChildren** which processes a single TrackChildrenQuery.

```typescript
trackChild = (parameters: TrackChildrenQuery) => TrackLocationReturnValue
```

## Returns
[TrackLocationReturnValue](/tracking/api-reference/interfaces/TrackLocationReturnValue.md) with only the `trackChildren` attribute set.

## Usage example

```typescript jsx
<div
  {...trackChildren([
    {
      queryAll: 'button[aria-label="Previous"]',
      trackAs: trackButton({ id: 'prev', text: 'Previous' })
    },
    {
      queryAll: 'button[aria-label="Next"]',
      trackAs: trackButton({ id: 'next', text: 'Next' })
    }
  ])}
>
  <ThirdPartyBlackBox />
</div>
```

<br />

:::info See also
- [Location Trackers](/tracking/api-reference/location-trackers/overview.md)
- [trackLocation](/tracking/api-reference/low-level/trackLocation.md)
- [Tracked Elements Observer](/tracking/core-concepts/tracker-architecture.md#tracked-elements-observer)
:::
