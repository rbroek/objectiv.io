# ItemContext

ItemContexts are special LocationContexts representing interactive elements of the UI or targets in a system.
These elements may trigger both Interactive and Non-Interactive Events, e.g. an Input field or a Button.


import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
`} caption="Figure: Diagram of InputContext inheritance" baseColor="blue" />


### Properties
None.
