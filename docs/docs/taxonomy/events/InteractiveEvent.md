# InteractiveEvent

The parent of [Events](/docs/taxonomy/events) that are the direct result of a user interaction, e.g. a button click.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> InteractiveEvent;
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
`} caption="Figure: Diagram of InteractiveEvent inheritance" baseColor="blue" />

### Requires
- [SectionContext](/taxonomy/location-contexts/SectionContext.md).