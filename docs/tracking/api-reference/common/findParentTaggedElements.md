# findParentTaggedElements

Walk the [DOM]() upwards looking for [TaggedElements](/TODO). The resulting array can be used to reconstruct a [LocationStack](/TODO).

```typescript
findParentTaggedElements = (
  element: TaggableElement | null, 
  parentElements: TaggableElement[] = []
) => TaggableElement[]
```  

:::info
`findParentTaggedElements` is recursive. The `parentElements` parameter is the accumulator.
:::

## Parameters
|          |                | type                               | default value
| :-:      | :--            | :--                                | :--           
| required | **element**    | [TaggableElement](/TODO) \| `null` |
| optional | parentElements | [TrackerConfig](/TODO)             | `[]`

## Returns
Array of [TaggableElement](/TODO)

:::info See also
- [getElementLocationStack](/TODO)
:::
