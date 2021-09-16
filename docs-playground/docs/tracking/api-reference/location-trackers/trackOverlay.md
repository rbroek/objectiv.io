# trackOverlay

Marks an [Element](/tracking/api-reference/advanced/elements.md#elements) to be tracked as [OverlayContext](/taxonomy/location-contexts/OverlayContext.md).

```typescript
trackOverlay = (parameters: {
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
<div {...trackOverlay({ id: 'modal-id' })}>
  …
</div>
```

```typescript jsx
<Modal {...trackOverlay({ id: 'modal-id' })}>
  …
</Modal>
```

<br />

:::tip Did you know ?
`trackOverlay` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/advanced/trackLocation.md).
:::

<br />


:::info See also
- [trackElement](/tracking/api-reference/location-trackers/trackNavigation.md)
- [trackNavigation](/tracking/api-reference/location-trackers/trackNavigation.md)
- [trackMediaPlayer](/tracking/api-reference/location-trackers/trackMediaPlayer.md)
- [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md)
- [trackLocation](/tracking/api-reference/advanced/trackLocation.md)
:::
