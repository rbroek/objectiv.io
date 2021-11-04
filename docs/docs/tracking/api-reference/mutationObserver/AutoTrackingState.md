# AutoTrackingState

Internal state holding an instance of the [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) and some state for some global events, like URLs and Application Loaded.

```typescript
AutoTrackingState = {
  observerInstance: MutationObserver | null,
  applicationLoaded: boolean,
  previousURL: string | undefined
}
```

## Attributes
|                   | type                                                                                            | default value                                                                      | description
| :--               | :--                                                                                             | :--                                                                                | :--
| observerInstance  | null \| [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)  | null                                                                               | Mutation Observer instance, if auto tracking has been initiated
| applicationLoaded | boolean                                                                                         | `true`                                                                             | Whether [trackApplicationLoaded](/tracking/api-reference/eventTrackers/trackApplicationLoaded.md) has been triggered already
| previousURL       | string | undefined                                                                              | The result of [getLocationHref](/tracking/api-reference/common/getLocationHref.md) | The last seen URL 

<br />

:::info see also
- [startAutoTracking](/tracking/api-reference/general/startAutoTracking.md)
- [stopAutoTracking](/tracking/api-reference/general/stopAutoTracking.md)
:::
