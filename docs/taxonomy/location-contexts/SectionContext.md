# SectionContext

SectionContexts are special LocationContexts representing a logical area of the UI or the system. They can be 
often reasoned about as being containers of other LocationContexts but not the direct targets of Events.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
`} caption="Figure: Diagram of SectionContext inheritance" baseColor="blue" />

### Properties
None.