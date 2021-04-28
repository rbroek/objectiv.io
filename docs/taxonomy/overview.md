---
title: Taxonomy Overview
slug: /taxonomy/overview
sidebar_label: Overview
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

The taxonomy forms the foundation of Objectiv: 

**A standardized set of events & event properties for analytics tracking and modeling, built with the data scientist in mind.**

It can cover any UI element, and captures its location along with any relevant contextual information. The resulting data can then be queried at any aggregation level.

Here’s an example of a ‘button click’ event captured in the Objectiv taxonomy, along with its location and contextual information:

```json title="Example: Button click with context (shortened)"
[
   {
      "event":"ClickEvent",
      "global_contexts":[
         {
            "_context_type":"DeviceContext",
            "id":"device",
            "timestamp":1619098940128,
            "timeZoneName":"Europe/Amsterdam",
            "timeOffset":120,
            "timeOffsetNameShort":"GMT+2"
         }
      ],
      "location_stack":[
         {
            "_context_type":"WebDocumentContext",
            "id":"rod-web",
            "url":"http://rick.objectiv.io/"
         }
         {
            "_context_type":"SectionContext",
            "id":"home"
         },
         {
            "_context_type":"ButtonContext",
            "id":"cta-buy-now",
            "text":"Buy Now!"
         }
      ]
   }
]
```

## Taxonomy Elements
The Taxonomy dictates three elements, explained in detail below: Events, Contexts, and the Location Stack.

<Mermaid chart={`
	graph TD
		AbstractEvent -- 0..n --> Context;
		AbstractEvent -- 1 --> LocationStack;
    
    click AbstractEvent "#event" "See more details" _self;
    click Context "#context" "See more details" _self;
    click LocationStack "#location" "See more details" _self;
    
    class Context diagram-blue;
    class AbstractEvent diagram-pink;
    class LocationStack diagram-yellow;
`}  caption="Figure: Objectiv Taxonomy elements" diagramType="blue" />


### Event

Anything occurring on your website or application is captured in Events. There are two types of Events:
*   **Interactive Events:** When a user actively does something. For example, a user clicking a button or changing an input field. 
*   **Non-Interactive Events**: When something happens without the user actively doing anything. For example, loading a page.

Here’s a simplified example of a user clicking a button, captured in the Objectiv taxonomy:

```json title="Example: Button click (shortened)"
[
   {
      "event":"ClickEvent",
      "location_stack":[
         {
            "_context_type":"WebDocumentContext",
            "id":"rod-web",
            "url":"http://rick.objectiv.io/"
         }
         {
            "_context_type":"SectionContext",
            "id":"home"
         },
         {
            "_context_type":"ButtonContext",
            "id":"cta-buy-now",
            "text":"Buy Now!"
         }
      ]
   }
]
```

See the [Events](events) section for all standardized Events, with examples.


### Context

Contexts add relevant information to Events, e.g. about its position in the UI, the text it’s displaying, the marketing campaign that the user saw right before, etc. 

Each Context is of a certain type (e.g. `ButtonContext`), and has an identifier. For example, a Context for an event happening on the `hero` section of a webpage is of type `SectionContext`, with id `hero`. 

Events can have 0..n Contexts. For example, a button click in the hero on the homepage can have a `SectionContext(id: ‘home’)`, and a `MarketingCampaignContext(id: ‘campaign123’)`.

Here’s an example of a user clicking a button, along with its Contexts captured in the Objectiv taxonomy:

```json title="Example: Multiple Contexts (shortened)"
[
   {
      "event":"ClickEvent",
      "global_contexts":[
         {
            "_context_type":"DeviceContext",
            "id":"device",
            "timestamp":1619098940128,
            "timeZoneName":"Europe/Amsterdam",
            "timeOffset":120,
            "timeOffsetNameShort":"GMT+2"
         },
         {
            "_context_type":"MarketingCampaignContext",
            "id":"‘campaign123’"
         }
      ],
      "location_stack":[
            ...
      ]
   }
]
```

See the [Contexts](contexts) section for all standardized Contexts, with examples of when they’re used.


### Location

In the Objectiv taxonomy, every Event requires a unique location ‘stack’, so every UI element can always be identified in the data. The location stack is made up of the combination of a Context `type`, its `id`, and its parent Context. In other words: a hash of `{context type, context id, hash of the parent}` is always unique.

For example, take a ‘Buy Now!’ button occurring twice on the homepage. The first button is located in the hero element (with id ‘hero’) on the homepage, then follows some sections explaining the product, and the second button then appears in a section summarizing the product’s benefits (with id ‘benefits’). 

_[TODO: fake screenshot] _

The location stacks for these two buttons then are:



1. First button: `WebDocumentContext(id:’homepage’, url: ‘https://foo.com’)` > `SectionContext(id: ‘hero’)` > `ButtonContext(id:’buy_now’)`;
2. First button: `WebDocumentContext(id:’homepage’, url: ‘https://foo.com’)` > `SectionContext(id: ‘benefits’)` > `ButtonContext(id:’buy_now’)`;

This ensures UI elements are uniquely identifiable in the data, yet still enables aggregation on any level. Take the same example from above: it’s still possible to for instance understand the performance of all ‘Buy Now’ buttons on the homepage, by aggregating on `ButtonContext(id:’buy_now’)` within `WebDocumentContext(id: `homepage`)`, thereby ignoring the two different `SectionContext`s these buttons live in.

Although following the taxonomy in implementation will generally ensure the location stack for every element is unique, it’s still possible to implement it differently. To safeguard for this, location stack uniqueness is enforced by the Objectiv SDKs, and the data models also run validation checks on it.


## Hierarchy: Inheritance & Extensibility

Both Events and Contexts adhere to a hierarchy, where each can have 0..n parents. Any properties of these parents are inherited. 

For example:
*   A `ButtonContext` has a parent `ActionContext`, which has properties `path` and `text`. The `ButtonContext` therefore automatically inherits those properties. 
*   The `ActionContext` that is the parent of the `ButtonContext`, in turn, has another parent, `ItemContext`. Therefore, a `ButtonContext` is also both an `ActionContext` and an `ItemContext`.

This hierarchical pattern can also be used to create custom Events and Contexts for domain-specific use cases that are not covered out-of-the-box in the Objectiv taxonomy.


<Mermaid chart={`
	graph TD
		ItemContext --> ActionContext;
		ActionContext["ActionContext<br><span class='properties'>-path: string<br>-text: string</span>"] --> ButtonContext;
    click ItemContext "contexts#itemcontext" "See more details" _self;
    click ActionContext "contexts#actioncontext" "See more details" _self;
    click ButtonContext "contexts#buttoncontext" "See more details" _self;
`}  caption="Figure: ButtonContext with two parents" diagramType="blue" />