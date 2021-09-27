# trackVideoPause

Triggers a [VideoPauseEvent](/taxonomy/events/VideoPauseEvent.md) for the given [TrackableElement](/tracking/core-concepts/elements.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

```typescript
trackVideoPause = (parameters: {
  element: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

## Parameters
|          |             | type                                                                                                                                                      | default value
| :-:      | :--         | :--                                                                                                                                                       | :--           
| required | **element** | [TrackableElement](/tracking/core-concepts/elements.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`
| optional | onError     | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md)                                                                    | `console.error`

## Returns
`trackVideoPause` is a void function.

## Usage example

```typescript jsx
<video
  play={(event) => {
    trackVideoStart({ element: event.target })
  }}
  pause={(event) => {
    trackVideoPause({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onPlay={({ target: youTubePlayerInstance }) => {
    trackVideoStart({ element: youTubePlayerInstance.getIframe() })
  }}
  onPause={({ target: youTubePlayerInstance }) => {
    trackVideoPause({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackVideoPause` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [trackVideoStart](/tracking/api-reference/event-trackers/trackVideoStart.md)
- [trackVisibility](/tracking/api-reference/event-trackers/trackVisibility.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
