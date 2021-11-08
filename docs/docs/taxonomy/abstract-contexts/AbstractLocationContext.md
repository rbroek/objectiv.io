# AbstractLocationContext

import Mermaid from '@theme/Mermaid';

This is the abstract parent of all [Location Contexts](/taxonomy/location-contexts/overview.md). Location Contexts are used to populate a [Tracker's](/tracking/core-concepts/trackers) or 
[Event's](/tracking/core-concepts/events.md) `location_stack` properties. A Location Stack is meant to describe accurately where an [Event](/tracking/core-concepts/events.md) 
originated in the UI, e.g. Sections, Menus, etc.

See [Location Contexts](/taxonomy/location-contexts/overview.md) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    click AbstractLocationContext "/docs/taxonomy/abstract-contexts/AbstractLocationContext" "See more details" _self;
`} caption="Figure: AbstractLocationContext inheritance" baseColor="blue" />

### Properties
All inherited from [AbstractContext](/taxonomy/abstract-contexts/overview.md#abstractcontext).
