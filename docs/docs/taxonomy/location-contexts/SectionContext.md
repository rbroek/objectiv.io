# SectionContext

SectionContext is a special [LocationContext](/taxonomy/location-contexts/overview.md) representing a logical area of the UI or the system. It is used to build hierarchy and usually contains other [LocationContexts](/taxonomy/location-contexts/overview.md). [Events](/taxonomy/events) typically target its children, not the SectionContext itself.

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