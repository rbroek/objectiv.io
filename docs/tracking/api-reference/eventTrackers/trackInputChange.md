# trackInputChange

Triggers a [InputChangeEvent](/taxonomy/events/InputChangeEvent.md) for the given [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

```typescript
trackInputChange = (parameters: {
  element: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackInputChange` is triggered automatically, on [blur event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event), by [tagInput](/tracking/api-reference/locationTaggers/tagInput.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element** | [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md)                                                                                      | The default tracker as returned by [getTracker](/TODO)
| optional | onError     | [TrackerOnErrorCallback](/tracking/api-reference/globals/TrackerOnErrorCallback.md)                                                                      | `console.error`

## Returns
`trackInputChange` is a void function.

## Usage example

```typescript jsx
import { trackInputChange } from '@objectiv/tracker-browser';
```

```typescript jsx
<input
  onBlur={(event) => {
    trackInputChange({ element: event.target })
  }}
/>
```

```typescript jsx
<select
  onChange={(event) => {
    trackInputChange({ element: event.target })
  }}
>
  ...
</select>
```

```typescript jsx
<TextField
  onBlur={(event) => {
    trackInputChange({ element: event.target })
  }}
/>
```

<br />

:::tip Did you know ?
`trackInputChange` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [tagInput](/tracking/api-reference/locationTaggers/tagInput.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
