# trackLocation

Marks an [Element](/tracking/core-concepts/elements.md#elements) to be tracked as any [LocationContext](/taxonomy/location-contexts/overview.md).

```typescript
trackLocation = (parameters: {
  instance: LocationContext,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

:::caution
`trackLocation` is a lower-level API. Unless really needed, it's easier to use specific [Location Trackers](/tracking/api-reference/location-trackers/overview.md) APIs. 
:::

## Parameters
|          |              | type                                                                                   | default value
| :-:      | :--          | :--                                                                                    | :--           
| required | **instance** | [LocationContext](/taxonomy/location-contexts/overview.md)                             |
| optional | options      | [TrackLocationOptions](/tracking/api-reference/general/TrackLocationOptions.md)     | Dynamically calculated based on `instance`. See the [Events](#events) table below.
| optional | onError      | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TrackLocationReturnValue](/tracking/api-reference/general/TrackLocationReturnValue.md) 

## Events
Unless customized via the `options` parameter, the given `instance` determines which Events are triggered automatically:

| LocationContext | Automatically triggers
| :--                                                                                  | :--           
| [ButtonContext](/taxonomy/location-contexts/ButtonContext.md)                        | [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
| [SectionContext](/taxonomy/location-contexts/SectionContext.md)                      | [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md), [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)
| [ExpandableElementContext](/taxonomy/location-contexts/ExpandanbleElementContext.md) | [trackClick](/tracking/api-reference/event-trackers/trackClick.md), [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md), [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)
| [InputContext](/taxonomy/location-contexts/InputContext.md)                          | [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md)
| [LinkContext](/taxonomy/location-contexts/LinkContext.md)                            | [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
| [MediaPlayerContext](/taxonomy/location-contexts/MediaPlayerContext.md)              | [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md), [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)
| [NavigationContext](/taxonomy/location-contexts/NavigationContext.md)                | [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md), [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)
| [OverlayContext](/taxonomy/location-contexts/OverlayContext.md)                      | [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md), [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Usage example

```typescript jsx
<Layout {...trackLocation({ instance: makeSectionContext({ id: 'layout' }) })}>
  <div {...trackLocation({ instance: makeOverlayContext({ id: 'modal' }) })}>
    …
  </div>
</Layout>
```

:::tip Did you notice ?
In the example above we factored the `instance` parameters by using [Core Location Context Factories](/tracking/api-reference/low-level/core-factories.md#location-context-factories).
:::

<br />

:::info See also
- [Location Trackers](/tracking/api-reference/location-trackers/overview.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
