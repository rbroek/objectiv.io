# ApplicationLoadedEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that is emitted after an application (eg. SPA) has finished loading. It contains a 
[SectionContext](/taxonomy/reference/location-contexts/SectionContext.md).

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> ApplicationLoadedEvent["ApplicationLoadedEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    click AbstractEvent "/docs/taxonomy/reference/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/reference/events/NonInteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of ApplicationLoadedEvent inheritance" baseColor="blue" />

### Requires
- [SectionContext](/taxonomy/reference/location-contexts/SectionContext.md).