# stringifyJson

JSON Objects stringifier

```typescript
stringifyJson = <T = unknown>(object: T, struct: Struct<T>): string
```  

## Parameters
|          |            | type     | default value
| :-:      | :--        | :--      | :--           
| required | **object** | `object` |

## Returns
string

## Throws
Error when the given `object` cannot be `JSON.stringify`d
