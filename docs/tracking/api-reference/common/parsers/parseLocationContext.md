# parseJson

[LocationContext](/tracking/api-reference/definitions/LocationContext.md) parser

```typescript
parseLocationContext = parseLocationContext = (stringifiedContext: string | null) => AnyLocationContext
```  

## Parameters
|          |                        | type               | default value
| :-:      | :--                    | :--                | :--           
| required | **stringifiedContext** | `string` \| `null` |

## Returns
[LocationContext](/tracking/api-reference/definitions/LocationContext.md) instance

## Throws
Error when the given `stringifiedContext` cannot be parsed

:::info See also
- [LocationContext Core Factories](/tracking/api-reference/core/coreFactories.md#location-context-factories)
:::