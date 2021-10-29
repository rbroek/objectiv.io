# trackClick

Triggers a [ClickEvent](/taxonomy/events/ClickEvent.md) for the given [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).  

```typescript
trackClick = (parameters: {
  element: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackClick` is triggered automatically, on [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), by [tagButton](/tracking/api-reference/location-taggers/tagButton.md), [tagLink](/tracking/api-reference/location-taggers/tagLink.md) or [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element** | [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                                                                      | The default tracker as returned by [getTracker](/TODO)
| optional | onError     | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md)                                                                      | `console.error`

## Returns
`trackClick` is a void function.

## Usage example

```typescript jsx
import { trackClick } from '@objectiv/tracker-browser';
```

```typescript jsx
<div
  onClick={(event) => {
    trackClick({ element: event.target })
  }}
/>
```

```typescript jsx
<Accordion
  onClick={(event) => {
    trackClick({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackClick` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [tagButton](/tracking/api-reference/location-taggers/tagButton.md)
- [tagLink](/tracking/api-reference/location-taggers/tagLink.md) 
- [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md)
- [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
