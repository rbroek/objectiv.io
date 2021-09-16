# trackExpandableElement

Marks an interactive [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [ExpandableElementContext](/taxonomy/location-contexts/ExpandanbleElementContext.md).

```typescript
trackExpandableElement = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

## Parameters
|          |         | type                                                                                   | default value
| :-:      | :--     | :--                                                                                    | :--           
| required | **id**  | string                                                                                 |
| optional | options | [TrackLocationOptions](/tracking/api-reference/interfaces/TrackLocationOptions.md)     | `{ trackClicks: true, trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/interfaces/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TrackLocationReturnValue](/tracking/api-reference/interfaces/TrackLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Usage example

```typescript jsx
<div {...trackExpandableElement({ id: 'faq-item-id' })}>
  …
</div>
```

```typescript jsx
<Accordion {...trackExpandableElement({ id: 'accordion-id' })}>
  …
</Accordion>
```

<br />

:::tip Did you know ?
`trackExpandableElement` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/advanced/trackLocation.md).
:::

<br />


:::info See also
- [trackButton](trackButton)
- [trackLink](trackLink)
- [trackElement](trackNavigation)
- [trackNavigation](trackNavigation)
- [trackOverlay](trackOverlay)
- [trackMediaPlayer](trackMediaPlayer)
- [trackLocation](/tracking/api-reference/advanced/trackLocation.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
