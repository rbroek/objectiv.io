# TagLocationOptions

The `options` object parameter allows to override the default automatic tracking behavior of [Location Taggers](/tracking/api-reference/location-taggers/overview.md) APIs.

| Option           | Possible value
| :--              | :--
| trackClicks      | boolean
| trackBlurs       | boolean
| trackVisibility  | `{ mode: 'auto' }` \| `{ mode: 'manual': isVisible: boolean }`

:::info
All options are optional and can be either omitted or set to `undefined` to revert to the default values.
:::

### options.trackClicks
Used to either force or prevent [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) being attached to [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements). 

### options.trackBlurs
Used to either force or prevent [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event) [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) being attached to [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements).

### options.trackVisibility
Used to customize whether to track [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md) and [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md) events, either automatically or manually.

#### Visibility mode:auto  
Either [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md) or [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md) are triggered when [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements) are added or removed to/from the DOM.

```js
trackVisibility = {
  mode: 'auto'
}
```

#### Visibility mode:manual  
Either [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md) or [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md) are triggered whenever the `isVisible` boolean state attribute changes.

```js
trackVisibility = {
  mode: 'manual',
  isVisible: boolean
}
```
