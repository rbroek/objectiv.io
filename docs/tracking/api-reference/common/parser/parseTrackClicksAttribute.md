# parseTrackClicksAttribute

[TaggingAttribute.trackClicks](/TODO) to TrackClicksOptions parser

```typescript
parseTrackClicksAttribute = (stringifiedTrackClicksAttribute: string | null) => TrackClicksOptions
```  

:::info
Differently than other simplistic parsers, this one transforms the input to a different format.
:::

## Parameters
|          |                                     | type               | default value
| :-:      | :--                                 | :--                | :--           
| required | **stringifiedTrackClicksAttribute** | `string` \| `null` |

## Returns
[TrackClicksOptions](/TODO) instance

## Throws
Error when the given `stringifiedTrackClicksAttribute` cannot be parsed
