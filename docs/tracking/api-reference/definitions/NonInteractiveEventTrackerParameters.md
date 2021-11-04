# NonInteractiveEventTrackerParameters

A variant of [InteractiveEventTrackerParameters](/tracking/api-reference/definitions/InteractiveEventTrackerParameters.md) where all attributes are optional.

Used as a base for parameters of all [Non-interactive Event Trackers](/tracking/api-reference/eventTrackers/overview.md#non-interactive).

```typescript
type NonInteractiveEventTrackerParameters = Partial<InteractiveEventTrackerParameters>;
```

## Attributes
|          |                | type                                                                                              | default value
| :-:      | :--            | :--                                                                                               | :--           
| optional | element        | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           | [Document.documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)                
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

:::info
Normally [Event Trackers](/tracking/api-reference/eventTrackers/overview.md#non-interactive) require a [TaggableElement](/tracking/api-reference/definitions/TaggableElement.md) to be specified. Non-interactive ones simply default to [Document.documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement), unless a different one is provided.
:::

<br />

:::info see also
- [Interactive Event Trackers](/tracking/api-reference/eventTrackers/overview.md#interactive)
- [InteractiveEventTrackerParameters](/tracking/api-reference/definitions/InteractiveEventTrackerParameters.md)
:::
