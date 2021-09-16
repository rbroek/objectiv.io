# trackNavigation

Marks an [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [NavigationContext](/taxonomy/location-contexts/NavigationContext.md).

```typescript
trackNavigation = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

## Parameters
|          |         | type                                                                                   | default value
| :-:      | :--     | :--                                                                                    | :--           
| required | **id**  | string                                                                                 |
| optional | options | [TrackLocationOptions](/tracking/api-reference/interfaces/TrackLocationOptions.md)     | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/interfaces/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TrackLocationReturnValue](/tracking/api-reference/interfaces/TrackLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Examples

```typescript jsx
<nav {...trackNavigation({ id: 'navigation-id' })}>
  …
</nav>
```

```typescript jsx
<TopNav {...trackNavigation({ id: 'navigation-id' })}>
  …
</TopNav>
```

<br />

:::tip Did you know ?
`trackNavigation` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/low-level/trackLocation.md).
:::

<br />


:::info See also
- [trackElement](/tracking/api-reference/location-trackers/trackNavigation.md)
- [trackOverlay](/tracking/api-reference/location-trackers/trackOverlay.md)
- [trackMediaPlayer](/tracking/api-reference/location-trackers/trackMediaPlayer.md)
- [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md)
- [trackLocation](/tracking/api-reference/low-level/trackLocation.md)
:::
