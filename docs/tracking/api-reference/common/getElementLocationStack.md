# getElementLocationStack

Generates a [LocationStack](/TODO) for the given [TrackedElement](/TODO). If a [BrowserTracker](/TODO) instance is provided, also predicts its mutations.

```typescript
getElementLocationStack = (parameters: { 
  element: TrackedElement; 
  tracker?: BrowserTracker;
}) => LocationStack 
```  

## Parameters
|          |             | type                    | default value
| :-:      | :--         | :--                     | :--           
| required | **element** | [TrackedElement](/TODO) |
| optional | tracker     | [BrowserTracker](/TODO) |

## Returns
[LocationStack](/TODO)

:::info See also
- [findParentTaggedElements](/TODO)
:::
