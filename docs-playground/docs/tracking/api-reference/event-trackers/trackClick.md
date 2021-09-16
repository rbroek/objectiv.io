# trackClick

Triggers a [ClickEvent](/taxonomy/events/ClickEvent.md) for the given [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).  

```typescript
trackClick = (parameters: {
  element: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackClick` is triggered automatically, on [click event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event), by [trackButton](/tracking/api-reference/location-trackers/trackButton.md), [trackLink](/tracking/api-reference/location-trackers/trackLink.md) or [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md).
:::

## Parameters
|          |             | type                                                                                                                                                      | default value
| :-:      | :--         | :--                                                                                                                                                       | :--           
| required | **element** | [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/interfaces/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`
| optional | onError     | [TrackerOnErrorCallback](/tracking/api-reference/interfaces/TrackerOnErrorCallback.md)                                                                    | `console.error`

## Returns
`trackClick` is a void function.

## Usage example

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
- [trackButton](/tracking/api-reference/location-trackers/trackButton.md)
- [trackLink](/tracking/api-reference/location-trackers/trackLink.md) 
- [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md)
- [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
