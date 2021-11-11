# URLChangeEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that is emitted when the URL of a page has changed. It requires a [WebDocumentContext](/taxonomy/reference/location-contexts/WebDocumentContext)
that details the change.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> URLChangeEvent["URLChangeEvent<br /><span class='properties'>requires:<br />WebDocumentContext</span>"];
    click AbstractEvent "/docs/taxonomy/reference/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/reference/events/NonInteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of URLChangeEvent inheritance" baseColor="blue" />

### Requires
- [WebDocumentContext](/taxonomy/reference/location-contexts/WebDocumentContext.md).