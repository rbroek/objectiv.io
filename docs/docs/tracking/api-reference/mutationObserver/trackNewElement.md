# trackNewElement

Invoked by the [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) [Callback](/tracking/api-reference/mutationObserver/makeMutationCallback.md) when detecting Nodes added to the DOM.

Performs a few operations:
- All Elements will be checked for visibility tracking and appropriate events will be triggered for them.
- Elements with [TaggingAttribute.trackClicks](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) are bound to an EventHandler for triggering [trackClick](/tracking/api-reference/eventTrackers/trackClick.md) events.
- Elements with [TaggingAttribute.trackBlurs](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackblurs) are bound to EventHandler for triggering [trackInputChange](/tracking/api-reference/eventTrackers/trackInputChange.md) events.
- All processed Elements are decorated with the [TaggingAttribute.tracked](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetracked) so we won't process them again.
- [LocationStacks](/tracking/api-reference/core/LocationStack.md) of all Elements are validated for uniqueness.

```typescript
const trackNewElement = (
  element: GuardableElement, 
  tracker: BrowserTracker, 
  console?: TrackerConsole
) => void
```

## Parameters
|          |             | type                                                                        | default value
| :-:      | :--         | :--                                                                         | :--           
| required | **element** | [GuardableElement](/tracking/api-reference/definitions/GuardableElement.md) |
| optional | tracker     | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)         |
| optional | console     | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)            |

<br />

:::info see also
- [makeMutationCallback](/tracking/api-reference/mutationObserver/makeMutationCallback.md)
- [makeClickEventHandler](/tracking/api-reference/mutationObserver/makeClickEventHandler.md)
- [makeBlurEventHandler](/tracking/api-reference/mutationObserver/makeBlurEventHandler.md)
- [parseTrackClicksAttribute](/tracking/api-reference/common/parsers/parseTrackClicksAttribute.md)
- [parseValidateAttribute](/tracking/api-reference/common/parsers/parseValidateAttribute.md)
- [getElementLocationStack](/tracking/api-reference/common/getElementLocationStack.md)
:::
