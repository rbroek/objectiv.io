---
sidebar_position: 3
title: Elements
slug: elements
---

## Tagging
[Objectiv's Tracker API](/tracking/api-reference/location-taggers/overview.md) is used to **tag** any Element
(see more below) that you want to track. The Tracker then uses this information to automatically decorate the 
Element in the DOM with the respective [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md). 

A tagging example in React:
```js
<LinkComponent 
  {...tagLink({ id: 'link-id', text: 'Go!', href: '/path' })} 
  to="/path">
    Go!
</LinkComponent>
```

...would result in something like the following decorated attributes:

```html
<a 
  data-objectiv-element-id="<a unique identifier>" 
  data-objectiv-context="<string of encoded contexts>" 
  data-objectiv-track-clicks="true" 
  href="/path">
  Go!
</a>
```

When the Tracker wants to send an [Event](events) related to an Element (e.g. a click), it uses its decorated 
[TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md) to compose the Event.

## Element Types
When talking about **Elements** we usually refer to DOM Interfaces and APIs such as 
[Nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node) / 
[Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) and 
[EventTargets](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget).

### Taggable Elements
Taggable Elements are [HTMLElements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and 
[SVGElements](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement), which are implementations of the 
beforementioned [Elements](https://developer.mozilla.org/en-US/docs/Web/API/Element). 

Examples are a `<div>` or an `<a>` element in HTML.

### Tagged Elements
These are **Taggable Elements** that have been already decorated by the Objectiv Tracker with at least the 
`elementId` and `context` [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md). The 
Tagging Attributes supply the Tracker with the information needed to compose & send the right [Events](events).

### Children Tagging Elements
These are **Taggable Elements** that have been already decorated with the 
[tagChildren](/tracking/api-reference/general/TaggingAttributes.md#taggingattributetagchildren) Tagging 
Attribute, because their parent was tagged to 
[track its children](/tracking/api-reference/low-level/tagChildren#childrentaggingquery-parameter)
using a CSS Selector query.
