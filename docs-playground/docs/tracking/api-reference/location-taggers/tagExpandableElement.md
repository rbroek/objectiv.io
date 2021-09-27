# tagExpandableElement

Tags an interactive [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [ExpandableElementContext](/taxonomy/location-contexts/ExpandanbleElementContext.md).

```typescript
tagExpandableElement = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                   | default value
| :-:      | :--     | :--                                                                                    | :--           
| required | **id**  | string                                                                                 |
| optional | options | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)     | `{ trackClicks: true, trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Usage example

```typescript jsx
<div {...tagExpandableElement({ id: 'faq-item-id' })}>
  …
</div>
```

```typescript jsx
<Accordion {...tagExpandableElement({ id: 'accordion-id' })}>
  …
</Accordion>
```

<br />

:::tip Did you know ?
`tagExpandableElement` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagButton](tagButton)
- [tagLink](tagLink)
- [tagElement](tagNavigation)
- [tagNavigation](tagNavigation)
- [tagOverlay](tagOverlay)
- [tagMediaPlayer](tagMediaPlayer)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
