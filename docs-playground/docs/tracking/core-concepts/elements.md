# Elements

When talking about **Elements** we usually refer to DOM Interfaces and APIs such as [Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) / [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) and [EventTargets](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

## Taggable Elements
[HTMLElements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and [SVGElements](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement). They can be decorated by [Location Taggers](/tracking/api-reference/location-taggers/overview.md) with [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md).      

## Tracked Elements
**Taggable Elements** that have been already decorated with at least the [elementId](/tracking/api-reference/general/TaggingAttributes.md#trackingattributeelementid) and [context](/tracking/api-reference/general/TaggingAttributes.md#trackingattributecontext) Tagging Attributes.

## Children Tracking Elements
**Taggable Elements** that have been already decorated with the [tagChildren](/tracking/api-reference/general/TaggingAttributes.md#trackingattributetrackchildren) Tagging Attribute.
