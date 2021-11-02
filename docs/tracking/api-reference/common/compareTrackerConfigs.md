# compareTrackerConfigs

Compares two TrackerConfig objects ignoring mutable attributes.  

```typescript
compareTrackerConfigs = (
  trackerConfigA: TrackerConfig, 
  trackerConfigB: TrackerConfig
) => boolean
```  

## Parameters
|          |                    | type                   | default value
| :-:      | :--                | :--                    | :--           
| required | **trackerConfigA** | [TrackerConfig](/TODO) |
| required | **trackerConfigB** | [TrackerConfig](/TODO) |

## Returns
boolean, `true` if configurations are equivalent, `false` otherwise.
