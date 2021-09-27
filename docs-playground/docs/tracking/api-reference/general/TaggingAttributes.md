# TaggingAttributes

[Location Taggers](/tracking/api-reference/location-taggers/overview.md) and [tagChildren](/tracking/api-reference/low-level/tagChildren.md) decorate [Taggable Elements](/tracking/core-concepts/elements.md#taggable-elements) by adding [Custom data-* Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) to them.

| Location Taggers | tagChildren   | Short name      | DOM dataset attribute name
| :-:               | :-:             | :--             | :--                                                                                       
| required          | never           | elementId       | `data-objectiv-element-id`
| required          | never           | context         | `data-objectiv-context`
| optional          | never           | parentElementId | `data-objectiv-parent-element-id`
| optional          | never           | trackClicks     | `data-objectiv-track-clicks`
| optional          | never           | trackBlurs      | `data-objectiv-track-blurs`
| optional          | never           | trackVisibility | `data-objectiv-track-visibility`
| never             | always          | tagChildren   | `data-objectiv-track-children`

### TaggingAttribute.elementId
A unique identifier used internally to pinpoint a specific [Tagged Element](/tracking/core-concepts/elements.md#tagged-elements).

### TaggingAttribute.context
A serialized [Location Context](/taxonomy/location-contexts/overview.md) instance.

### TaggingAttribute.parentElementId
Rebuilding [Locations](/tracking/core-concepts/locations.md) via the DOM is not always accurate (eg: [React Portals](https://reactjs.org/docs/portals.html)). This allows specifying a parent [Tagged Element](/tracking/core-concepts/elements.md#tagged-elements).

### TaggingAttribute.trackClicks
Whether to attach [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to the [Tagged Element](/tracking/core-concepts/elements.md#tagged-elements) to automatically trigger [trackClick](/tracking/api-reference/event-trackers/trackClick.md) on [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event).

### TaggingAttribute.trackBlurs
Whether to attach [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to the [Tagged Element](/tracking/core-concepts/elements.md#tagged-elements) to automatically track [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md) events on [blur](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event).

### TaggingAttribute.trackVisibility
Whether to monitor the [Tagged Element](/tracking/core-concepts/elements.md#tagged-elements) to automatically track either [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md) or [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md) events.

### TaggingAttribute.tagChildren
A serialized list of [ChildTrackingQuery](/tracking/api-reference/low-level/tagChildren.md#trackchildrenquery-parameter) objects.
