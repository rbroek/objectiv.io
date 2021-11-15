---
sidebar_position: 4
title: AbstractLocationContext
---

# AbstractLocationContext

import Mermaid from '@theme/Mermaid';

This is the abstract parent of all [Location Contexts](/taxonomy/reference/location-contexts/overview.md). Location Contexts are used to populate a [Tracker's](/tracking/core-concepts/trackers) or 
[Event's](/tracking/core-concepts/events.md) `location_stack` properties. A Location Stack is meant to describe accurately where an [Event](/tracking/core-concepts/events.md) 
originated in the UI, e.g. Sections, Menus, etc.

See [Location Contexts](/taxonomy/reference/location-contexts/overview.md) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    class AbstractLocationContext diagramActive;
`} 
  caption="Diagram: AbstractLocationContext inheritance" 
  baseColor="blue"
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/abstract-contexts/AbstractLocationContext' },
  ]}
/>

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
