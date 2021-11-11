# AbortedEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that is emitted when an action fails or is aborted, e.g. a form that is 
posted, but not successfully.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> AbortedEvent["AbortedEvent<br /><span class='properties'>requires:<br />ErrorContext</span>"];
    click AbstractEvent "/docs/taxonomy/reference/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/reference/events/NonInteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of NonInteractiveEvent inheritance" baseColor="blue" />

### Requires
- [ErrorContext](/taxonomy/reference/global-contexts/ErrorContext.md).