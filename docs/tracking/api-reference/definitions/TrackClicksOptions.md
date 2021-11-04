# TrackClicksOptions

[TaggingAttribute.trackClicks](/tracking/api-reference/definitions/TaggingAttribute.md#taggingattributetrackclicks) are parsed onto this object via [parseTrackClickAttribute](/tracking/api-reference/common/parsers/parseTrackClicksAttribute.md).  


```typescript jsx
type TrackClicksOptions = undefined | {
  waitForQueue?: WaitUntilTrackedOptions;
  flushQueue?: FlushQueueOptions;
};
```

:::info see also
- [parseTrackClickAttribute](/tracking/api-reference/common/parsers/parseTrackClicksAttribute.md)
- [WaitForQueueOptions](/tracking/api-reference/definitions/WaitForQueueOptions.md)
- [FlushQueueOptions](/tracking/api-reference/definitions/FlushQueueOptions.md)
- [TagLocationOptions](/tracking/api-reference/definitions/TagLocationOptions.md)
:::
