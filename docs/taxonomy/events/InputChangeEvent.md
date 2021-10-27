# InputChangeEvent

Event triggered when user input is modified.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> InteractiveEvent;
    InteractiveEvent["InteractiveEvent<br /><span class='properties'>requires:<br />SectionContext</span>"] --> InputChangeEvent["InputChangeEvent<br /><span class='properties'>requires:<br />InputContext</span>"];
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
    click InteractiveEvent "/docs/taxonomy/events/InteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of InputChangeEvent inheritance" baseColor="blue" />

### Requires
- [InputContext](/docs/taxonomy/global-contexts/InputContext).