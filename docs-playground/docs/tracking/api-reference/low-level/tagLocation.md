# tagLocation

Tags a [Taggable Element](/tracking/core-concepts/elements.md#taggable-elements) to be tracked as any [LocationContext](/taxonomy/location-contexts/overview.md).

```typescript
tagLocation = (parameters: {
  instance: LocationContext,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

:::caution
`tagLocation` is a lower-level API. Unless really needed, it's easier to use specific [Location Taggers](/tracking/api-reference/location-taggers/overview.md) APIs. 
:::

## Parameters
|          |              | type                                                                                   | default value
| :-:      | :--          | :--                                                                                    | :--           
| required | **instance** | [LocationContext](/taxonomy/location-contexts/overview.md)                             |
| optional | options      | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)     | Dynamically calculated based on `instance`. See the [Events](#events) table below.
| optional | onError      | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md) 

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
<Layout {...tagLocation({ instance: makeSectionContext({ id: 'layout' }) })}>
  <div {...tagLocation({ instance: makeOverlayContext({ id: 'modal' }) })}>
    …
  </div>
</Layout>
```

:::tip Did you notice ?
In the example above we factored the `instance` parameters by using [Core Location Context Factories](/tracking/api-reference/low-level/core-factories.md#location-context-factories).
:::

<br />

:::info See also
- [Location Taggers](/tracking/api-reference/location-taggers/overview.md)
- [trackEvent](/tracking/api-reference/low-level/trackEvent.md)
:::
