# startAutoTracking

Initializes [Mutation Observer](/tracking/api-reference/mutationObserver/overview.md) based automatic tracking.

```typescript
startAutoTracking = (options: {
  trackURLChanges?: boolean;
  trackApplicationLoaded;
  console?: TrackerConsole
}): void
```

:::tip
Auto tracking is fully automated when using [makeTracker](/tracking/api-reference/general/makeTracker.md) or [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md).
:::

:::caution
`startAutoTracking` can be called multiple times safely but will not re-initiate auto-tracking, nor change its configuration.
To restart auto-tracking with different options, first call [stopAutoTracking](/tracking/api-reference/general/stopAutoTracking.md).
:::

## Parameters
|          |                        | type                                                                 | default value
| :-:      | :--                    | :--                                                                  | :--           
| optional | trackURLChanges        | boolean                                                              | `true`
| optional | trackApplicationLoaded | boolean                                                              | `true`
| optional | console                | [TrackerConsole](/tracking/api-reference/core/TrackerConsole.md)     |

## Events
- [trackApplicationLoaded](/tracking/api-reference/eventTrackers/trackApplicationLoaded.md)
    
<br />

:::info see also
- [stopAutoTracking](/tracking/api-reference/general/stopAutoTracking.md)
- [makeTracker](/tracking/api-reference/general/makeTracker.md) 
- [getOrMakeTracker](/tracking/api-reference/general/getOrMakeTracker.md) 
:::