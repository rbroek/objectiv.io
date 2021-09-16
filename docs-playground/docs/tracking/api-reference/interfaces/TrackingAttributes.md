# TrackingAttributes

[Location Trackers](/tracking/api-reference/location-trackers/overview.md) and [trackChildren](/tracking/api-reference/low-level/trackChildren.md) decorate [Trackable Elements](/tracking/core-concepts/elements.md#trackable-elements) by adding [Custom data-* Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) to them.

| Location Trackers | trackChildren   | Short name      | DOM dataset attribute name
| :-:               | :-:             | :--             | :--                                                                                       
| required          | never           | elementId       | `data-objectiv-element-id`
| required          | never           | context         | `data-objectiv-context`
| optional          | never           | parentElementId | `data-objectiv-parent-element-id`
| optional          | never           | trackClicks     | `data-objectiv-track-clicks`
| optional          | never           | trackBlurs      | `data-objectiv-track-blurs`
| optional          | never           | trackVisibility | `data-objectiv-track-visibility`
| never             | always          | trackChildren   | `data-objectiv-track-children`

### TrackingAttribute.elementId
A unique identifier used internally to pinpoint a specific [Tracked Element](/tracking/core-concepts/elements.md#tracked-elements).

### TrackingAttribute.context
A serialized [Location Context](/taxonomy/location-contexts/overview.md) instance.

### TrackingAttribute.parentElementId
Rebuilding [Locations](/tracking/core-concepts/locations.md) via the DOM is not always accurate (eg: [React Portals](https://reactjs.org/docs/portals.html)). This allows specifying a parent [Tracked Element](/tracking/core-concepts/elements.md#tracked-elements).

### TrackingAttribute.trackClicks
Whether to attach [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to the [Tracked Element](/tracking/core-concepts/elements.md#tracked-elements) to automatically trigger [trackClick](/tracking/api-reference/event-trackers/trackClick.md) on [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).

### TrackingAttribute.trackBlurs
Whether to attach [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to the [Tracked Element](/tracking/core-concepts/elements.md#tracked-elements) to automatically track [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md) events on [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).

### TrackingAttribute.trackVisibility
Whether to monitor the [Tracked Element](/tracking/core-concepts/elements.md#tracked-elements) to automatically track either [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md) or [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md) events.

### TrackingAttribute.trackChildren
A serialized list of [ChildTrackingQuery](/tracking/api-reference/low-level/trackChildren.md#trackchildrenquery-parameter) objects.
