# trackVisibility

Triggers either a [SectionVisibleEvent](/taxonomy/events/SectionVisibleEvent.md) or [SectionHiddenEvent](/taxonomy/events/SectionHiddenEvent.md) for the given [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) or [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) based on state.

```typescript
trackVisibility = (parameters: {
  element: TrackableElement | EventTarget,
  isVisible: boolean,
  tracker?: BrowserTracker
}) => void
```

## Parameters
|          |               | type                                                                                                                                                      | default value
| :-:      | :--           | :--                                                                                                                                                       | :--           
| required | **element**   | [TrackableElement](/tracking/core-concepts/elements.md#trackable-elements) \| [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) |
| required | **isVisible** | boolean                                                                                                                                                   |
| optional | tracker       | [BrowserTracker](/tracking/api-reference/interfaces/BrowserTracker.md)                                                                                    | `window.objectiv.tracker`

## Returns
`trackVisibility` is a void function.

## Usage example

```typescript jsx
<Accordion
  onChange={(event, expanded) => {
    trackVisibility({ element: event.target, isVisible: expanded })
  }}
>
  …
</Accordion>
```

<br />

:::tip Did you know ?
`trackVisibility` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/advanced/trackEvent.md).
:::

<br />

:::info See also
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)
- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackEvent](/tracking/api-reference/advanced/trackEvent.md)
  :::
