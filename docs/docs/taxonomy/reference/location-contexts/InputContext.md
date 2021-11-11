# InputContext

A [ItemContext](/taxonomy/reference/location-contexts/ItemContext) that describes an element that accepts user input, i.e. a form field.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    ItemContext --> InputContext;
    click AbstractContext "/docs/taxonomy/reference/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click ItemContext "/docs/taxonomy/reference/location-contexts/ItemContext" "See more details" _self;
`} caption="Figure: Diagram of InputContext inheritance" baseColor="blue" />

### Properties
None.