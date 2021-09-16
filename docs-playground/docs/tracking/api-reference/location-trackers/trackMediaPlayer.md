# trackMediaPlayer

Marks an [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [MediaPlayerContext](/taxonomy/location-contexts/MediaPlayerContext.md).

```typescript
trackMediaPlayer = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

## Parameters
|          |         | type                                                                                   | default value
| :-:      | :--     | :--                                                                                    | :--           
| required | **id**  | string                                                                                 |
| optional | options | [TrackLocationOptions](/tracking/api-reference/general/TrackLocationOptions.md)     | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TrackLocationReturnValue](/tracking/api-reference/general/TrackLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Examples

```typescript jsx
<div {...trackMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />  
</div>
```

```typescript jsx
<Player {...trackMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
</Player>
```

<br />

:::tip Did you know ?
`trackMediaPlayer` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/low-level/trackLocation.md).
:::

<br />


:::info See also
- [trackElement](/tracking/api-reference/location-trackers/trackElement.md)
- [trackNavigation](/tracking/api-reference/location-trackers/trackNavigation.md)
- [trackOverlay](/tracking/api-reference/location-trackers/trackOverlay.md)
- [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md)
- [trackLocation](/tracking/api-reference/low-level/trackLocation.md)
- :::
