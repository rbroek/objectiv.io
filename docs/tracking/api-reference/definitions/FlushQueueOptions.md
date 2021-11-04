# FlushQueueOptions

[TaggingAttribute.trackClicks.options.waitUntilTracked.flushQueue](#TODO) option value.

```typescript
type FlushQueueOptions = false | true | 'onTimeout';
```

## Value meaning
|             |                        
| :--         | :--                    
| `false`       | Click Handler, after invoking [waitForQueue](#TODO), will never invoke [flushQueue](#TODO)                 
| `true`        | Click Handler, after invoking [waitForQueue](#TODO), will always invoke [flushQueue](#TODO)
| `'onTimeout'` | Click Handler will invoke [flushQueue](#TODO) only if [waitForQueue](#TODO) timed out

<br/>

:::info see also
- [TaggingAttribute.trackClicks](#TODO)
- [TaggingAttribute.trackClicks.waitUntilTracked](#TODO)
- [TaggingAttribute.trackClicks.waitUntilTracked.waitForQueue](#TODO)
- [waitForQueue](#TODO)
- [flushQueue](#TODO)
:::
