# AbstractLocationContext

import Mermaid from '@theme/Mermaid';

This is the abstract parent of all Location Contexts. LocationContexts are used to populate a Tracker's or 
Event's `location_stack` properties. A Location Stack is meant to describe accurately where an Event 
originated in the UI, e.g. Sections, Menus, etc.

See [Location Contexts](/docs/taxonomy/location-contexts) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    click AbstractLocationContext "/docs/taxonomy/abstract-contexts/AbstractLocationContext" "See more details" _self;
`} caption="Figure: AbstractLocationContext inheritance" baseColor="blue" />

### Properties
None.
