# parseJson

JSON Objects parser

```typescript
parseJson = <T = unknown>(stringifiedObject: string | null, struct: Struct<T>) => T
```  

## Parameters
|          |                       | type               | default value
| :-:      | :--                   | :--                | :--           
| required | **stringifiedObject** | `string` \| `null` |

## Returns
An object of shape T 

## Throws
Error when the given `stringifiedObject` cannot be `JSON.parse`d
