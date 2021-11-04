# InputContext

A [ItemContext](/docs/taxonomy/location-contexts/ItemContext) that describes an element that accepts user input, i.e. a form field.

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