# SectionVisibleEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that's emitted after a section ([SectionContext](/taxonomy/reference/location-contexts/SectionContext.md)) has become visible.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> SectionVisibleEvent["SectionVisibleEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    click AbstractEvent "/docs/taxonomy/reference/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/reference/events/NonInteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of SectionVisibleEvent inheritance" baseColor="blue" />

### Requires
- [SectionContext](/taxonomy/reference/location-contexts/SectionContext.md).