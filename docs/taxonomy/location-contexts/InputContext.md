# InputContext

A location context, representing user input. For example, a form field, like input.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    ItemContext --> InputContext;
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click ItemContext "/docs/taxonomy/location-contexts/ItemContext" "See more details" _self;
`} caption="Figure: Diagram of InputContext inheritance" baseColor="blue" />

### Properties
None.