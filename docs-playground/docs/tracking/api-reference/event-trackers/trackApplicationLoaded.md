# trackApplicationLoaded

Triggers a [ApplicationLoadedEvent](/taxonomy/events/ApplicationLoadedEvent.md).

```typescript
trackApplicationLoaded = (parameters: {
  element?: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackApplicationLoaded` is triggered automatically by [makeTracker](/tracking/api-reference/general/makeTracker.md) on its first execution.
:::

## Parameters
|          |         | type                                                                                                                                                      | default value
| :-:      | :--     | :--                                                                                                                                                       | :--           
| optional | element | [TrackableElement](/tracking/core-concepts/elements.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) | `document`
| optional | tracker | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md)                                                                    | `console.error`

## Returns
`trackApplicationLoaded` is a void function.

## Usage example

```typescript jsx
import { trackApplicationLoaded } from '@objectiv/tracker-browser';
```

```typescript jsx
<head>
  …
  <script>
    trackApplicationLoaded();
  </script>
</head>
```

```typescript jsx
const App = () => {
  …
  
  trackApplicationLoaded();
  
  return (
    …
  )
}
```

<br />

:::tip Did you know ?
`trackApplicationLoaded` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackURLChange](/tracking/api-reference/event-trackers/trackURLChange.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
