# InteractiveEventTrackerParameters

The base parameters of all interactive [Event Trackers](/tracking/api-reference/eventTrackers/overview.md#interactive).

```typescript
type InteractiveEventTrackerParameters = {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
};
```

## Attributes
|          |                | type                                                                                              | default value 
| :-:      | :--            | :--                                                                                               | :--           
| required | **element**    | string                                                                                            |                
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

<br/>

:::info see also
- [Non-interactive Event Trackers](/tracking/api-reference/eventTrackers/overview.md#non-interactive)
- [NonInteractiveEventTrackerParameters](/tracking/api-reference/definitions/NonInteractiveEventTrackerParameters.md)
:::
