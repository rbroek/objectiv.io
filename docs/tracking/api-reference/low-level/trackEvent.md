# trackEvent

First, it determines the [Location](/tracking/core-concepts/locations.md) of a [TrackableElement](/tracking/core-concepts/tagging.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), then enriches the given [Event](/taxonomy/events/AbstractEvent.md) with the Location and triggers it.

```typescript
trackEvent = (parameters: {
  event: TrackerEvent;
  element?: TaggableElement | EventTarget;
  tracker?: BrowserTracker;
  trackerId?: string;
  onError?: TrackOnErrorCallback;
}) => void
```

:::caution
`trackEvent` is a lower-level API. It's main purpose is to ease the development of new [Event Trackers](/tracking/api-reference/event-trackers/overview.md).
:::

## Parameters
|          |           | type                                                                                                                                                      | default value
| :-:      | :--       | :--                                                                                                                                                       | :--           
| required | **event** | [Event](/taxonomy/events/overview.md) (see [Event Factories](/tracking/api-reference/low-level/core-factories.md#event-factories)) | 
| optional | element   | [TaggableElement](/tracking/core-concepts/tagging.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)    | [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
| optional | tracker   | [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md)                                                                                       | The default tracker as returned by [getTracker](/TODO)
| optional | trackerId | [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md)                                                                                       | The default tracker as returned by [getTracker](/TODO)
| optional | onError   | [TrackerOnErrorCallback](/tracking/api-reference/globals/TrackerOnErrorCallback.md)                                                                       | `console.error`

## Returns
`trackEvent` is a void function.

## Usage example

```typescript jsx
import { trackEvent, makeClickEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
export const trackClickEvent = (parameters: {
  element: TaggableElement | EventTarget;
  tracker?: BrowserTracker;
  onError?: TrackOnErrorCallback;
}) => {
  return trackEvent({ event: makeClickEvent(), ...parameters });
};
```

<br />

:::info See also
- [Event Trackers](/tracking/api-reference/event-trackers/overview.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [EventFactory](/tracking/api-reference/low-level/core-factories.md#event-factory-list)
:::
