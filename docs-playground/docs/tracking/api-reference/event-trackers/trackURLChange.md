# trackURLChange

Triggers a [URLChangeEvent](/taxonomy/events/URLChangeEvent.md).

```typescript
trackURLChange = (parameters: {
  element?: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackURLChange` events are triggered automatically by the [Tagged Elements Observer](/tracking/core-concepts/tracker-architecture.md#tagged-elements-observer) whenever [Location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href) changes.
:::

## Parameters
|          |         | type                                                                                                                                                      | default value
| :-:      | :--     | :--                                                                                                                                                       | :--           
| optional | element | [TrackableElement](/tracking/core-concepts/elements.md#taggable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) | `document`
| optional | tracker | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md)                                                                    | `console.error`

## Returns
`trackURLChange` is a void function.

## Usage example

```typescript jsx
import { trackURLChange } from '@objectiv/tracker-browser';
```

```typescript
const App = () => {
  …
  const MonitorURLChanges = () => {
    const location = useLocation();
    const [previousHref, setPreviousHref] = useState(document.location.href);
    
    useEffect(() => {
      if (location.href !== previousHref) {
        setPreviousHref(location.href);
        trackURLChange();
      }
    }, [location, previousHref])
    return null;
  };
  …
  return (
    <BrowserRouter>
      <Route component = { MonitorURLChanges } />
      …
    </BrowserRouter>
  )
}
```

:::caution Just pseudo code
These are rather simplistic examples to illustrate the idea.  

The definition of a `URL Change` is a fuzzy one at best and there are many different ways of tracking URL changes depending on architecture, used frameworks and requirements. 

In fact, [Browser Tracker](/tracking/core-concepts/tracker-architecture.md#browser-tracker) uses none of the above. Instead it relies on a [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) in combination with some state. 
:::

<br />

:::tip Did you know ?
`trackURLChange` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/low-level/trackEvent.md).
:::

<br />

:::info See also
- [makeTracker](/tracking/api-reference/general/makeTracker.md)
- [trackApplicationLoaded](/tracking/api-reference/event-trackers/trackApplicationLoaded.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
