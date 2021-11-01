# setDefaultTracker

Changes the default [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md) in the [TrackerRepository](/tracking/api-reference/globals/TrackerRepository.md). This is the instance [getTracker](/tracking/api-reference/globals/getTracker.md) returns by default.  

```typescript
setDefaultTracker = (trackerId: string) => void
```

:::tip Default Tracker ?
[Event Trackers](/tracking/api-reference/event-trackers/overview.md) internally use [getTracker](/tracking/api-reference/globals/getTracker.md) to retrieve the default [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md) instance to use.
:::

## Parameters
|          |               | type   | default value
| :-:      | :--           | :--    | :--           
| required | **trackerId** | string |

## Returns
`setDefaultTracker` is a void function.

## Usage example

```typescript jsx
import { setDefaultTracker } from '@objectiv/tracker-browser';
```

```typescript jsx
setDefaultTracker('secondary-tracker');
```

<br />

:::info See also
- [makeTracker](/tracking/api-reference/globals/makeTracker.md)
- [getTracker](/tracking/api-reference/globals/getTracker.md)
- [TrackerRepository](/tracking/api-reference/globals/TrackerRepository.md)
- [BrowserTracker](/tracking/api-reference/globals/BrowserTracker.md) 
- [Event Trackers](/tracking/api-reference/event-trackers/overview.md)
:::
