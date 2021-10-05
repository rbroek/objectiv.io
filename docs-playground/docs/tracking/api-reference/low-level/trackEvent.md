# trackEvent

First, it determines the [Location](/tracking/core-concepts/locations.md) of a [TrackableElement](/tracking/core-concepts/elements.md#taggable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), then factors an [Event](/taxonomy/events/AbstractEvent.md) with the given [EventFactory](/tracking/api-reference/low-level/core-factories.md#event-factory-list), finally enriches the newly created Event it with the Location and triggers it.

```typescript
trackEvent = (parameters: {
  eventFactory: EventFactory;
  element: TrackableElement | EventTarget;
  tracker?: BrowserTracker;
  onError?: TrackOnErrorCallback;
}) => void
```

:::caution
`trackEvent` is a lower-level API. It's main purpose is to ease the development of new [Event Trackers](/tracking/api-reference/event-trackers/overview.md).
:::

## Parameters
|          |                  | type                                                                                                                                                      | default value
| :-:      | :--              | :--                                                                                                                                                       | :--           
| required | **eventFactory** | [EventFactory](/tracking/api-reference/low-level/core-factories.md#event-factory-list)                                                                    |
| required | **element**      | [TrackableElement](/tracking/core-concepts/elements.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| optional | tracker          | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`
| optional | onError          | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md)                                                                    | `console.error`

## Returns
`trackEvent` is a void function.

## Usage example

```typescript jsx
import { trackEvent } from '@objectiv/tracker-browser';
```

```typescript jsx
export const trackCustomEvent = ({ element, tracker, onError }: TrackEventHelperParameters) => {
  return trackEvent({ eventFactory: makeCustomEvent, element, tracker, onError });
};
```

<br />

:::info See also
- [Event Trackers](/tracking/api-reference/event-trackers/overview.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [EventFactory](/tracking/api-reference/low-level/core-factories.md#event-factory-list)
:::
