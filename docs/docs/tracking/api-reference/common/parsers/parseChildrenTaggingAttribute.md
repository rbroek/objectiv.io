# parseChildrenTaggingAttribute

[StringifiedChildrenTaggingAttributes](/tracking/api-reference/definitions/StringifiedChildrenTaggingAttributes.md) parser

```typescript
parseChildrenTaggingAttribute = (stringifiedChildrenTaggingAttribute: string | null) => ValidChildrenTaggingQuery[]
```  

## Parameters
|          |                                         | type             | default value
| :-:      | :--                                     | :--              | :--           
| required | **stringifiedChildrenTaggingAttribute** | string \| `null` |

## Returns
Array of [ValidChildrenTaggingQuery](/tracking/api-reference/definitions/ValidChildrenTaggingQuery.md)

## Throws
Error when the given `stringifiedChildrenTaggingAttribute` cannot be parsed
