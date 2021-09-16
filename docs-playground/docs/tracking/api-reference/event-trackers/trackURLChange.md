# trackURLChange

Triggers a [URLChangeEvent](/taxonomy/events/URLChangeEvent.md).

```typescript
trackURLChange = (parameters: {
  element?: TrackableElement | EventTarget,
  tracker?: BrowserTracker
}) => void
```

:::info
`trackURLChange` events are triggered automatically by the [Tracked Elements Observer](/tracking/core-concepts/tracker-architecture.md#tracked-elements-observer) whenever [Location.href](https://developer.mozilla.org/en-US/docs/Web/API/Location/href) changes.
:::

## Parameters
|          |         | type                                                                                                                                                      | default value
| :-:      | :--     | :--                                                                                                                                                       | :--           
| optional | element | [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) | `document`
| optional | tracker | [BrowserTracker](/tracking/api-reference/interfaces/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`

## Returns
`trackURLChange` is a void function.

## Usage example

```typescript jsx
<head>
  …
  <script>
    trackURLChange();
  </script>
</head>
```

```typescript jsx
const [previousURL, setPreviousURL] = useState(document.location.href);

useEffect(() => {
  if (document.location.href !== previousURL) {
    setPreviousURL(document.location.href);
    trackURLChange();
  }
}, [previousURL])  
```

```typescript
import { browserHistory } from 'react-router';
…
useEffect(() => {
  return browserHistory.listen(trackURLChange);
}, []);
…
```

:::caution Just pseudo code
These are rather simplistic examples to illustrate the idea.  

The definition of a `URL Change` is a fuzzy one at best and there are many different ways of tracking URL changes depending on architecture, used frameworks and requirements. 

[Browser Tracker](/tracking/core-concepts/tracker-architecture.md#browser-tracker) uses none of the above. Instead it relies on a [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) in combination with some state. 
:::

<br />

:::tip Did you know ?
`trackApplicationLoaded` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/advanced/trackEvent.md).
:::

<br />

:::info See also
- [configureTracker](/tracking/api-reference/general/configureTracker.md)
- [trackApplicationLoaded](/tracking/api-reference/event-trackers/trackApplicationLoaded.md)
- [trackEvent](/tracking/api-reference/advanced/trackEvent.md)
:::
