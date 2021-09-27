# tagMediaPlayer

Tags an [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [MediaPlayerContext](/taxonomy/location-contexts/MediaPlayerContext.md).

```typescript
tagMediaPlayer = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                   | default value
| :-:      | :--     | :--                                                                                    | :--           
| required | **id**  | string                                                                                 |
| optional | options | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)     | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Examples

```typescript jsx
<div {...tagMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />  
</div>
```

```typescript jsx
<Player {...tagMediaPlayer({ id: 'player-id' })}>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
</Player>
```

<br />

:::tip Did you know ?
`tagMediaPlayer` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagElement](/tracking/api-reference/location-taggers/tagElement.md)
- [tagNavigation](/tracking/api-reference/location-taggers/tagNavigation.md)
- [tagOverlay](/tracking/api-reference/location-taggers/tagOverlay.md)
- [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- :::
