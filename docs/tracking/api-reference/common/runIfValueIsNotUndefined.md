# runIfValueIsNotUndefined

Executes `functionToRun(value)` only if the given `value` is not `undefined`

```typescript
runIfValueIsNotUndefined = (functionToRun: Function, value: unknown) => unknown | undefined
```  

## Returns
The result of `functionToRun(value)` or `undefined`
