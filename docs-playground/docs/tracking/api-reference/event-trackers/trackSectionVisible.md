# trackSectionVisible

Triggers a [SectionVisibleEvent](/taxonomy/events/SectionVisibleEvent.md) for the given [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

```typescript
trackSectionVisible = (parameters: {
  element: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackSectionVisible` is triggered automatically by [trackElement](/tracking/api-reference/location-trackers/trackElement.md), [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md), [trackMediaPlayer](/tracking/api-reference/location-trackers/trackMediaPlayer.md), [trackNavigation](/tracking/api-reference/location-trackers/trackNavigation.md) and [trackOverlay](/tracking/api-reference/location-trackers/trackOverlay.md).
:::

## Parameters
|          |             | type                                                                                                                                                      | default value
| :-:      | :--         | :--                                                                                                                                                       | :--           
| required | **element** | [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/interfaces/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`
| optional | onError     | [TrackerOnErrorCallback](/tracking/api-reference/interfaces/TrackerOnErrorCallback.md)                                                                    | `console.error`

## Returns
`trackSectionVisible` is a void function.

## Usage example

```typescript jsx
<Modal
  onShow={(event) => {
    trackSectionVisible({ element: event.target })
  }}
  onHide={(event) => {
    trackSectionHidden({ element: event.target })
  }}
>
  …
</Modal>
```

```typescript jsx
const elementRef = createRef();
…
useEffect(() => {
  trackSectionVisible({ element: elementRef.current });
  return () => {
    trackSectionHidden({ element: elementRef.current });
  }
}, [])
…
return (
  <div ref={elementRef}>
    …
  </div>
)
```

<br />

:::tip Did you know ?
`trackSectionVisible` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)
- [trackVisibility](/tracking/api-reference/event-trackers/trackVisibility.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
  :::
