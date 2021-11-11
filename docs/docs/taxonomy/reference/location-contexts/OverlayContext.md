# OverlayContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext) that describes a section of the UI that represents an overlay, i.e. a Modal.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> OverlayContext;
    click AbstractContext "/docs/taxonomy/reference/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click SectionContext "/docs/taxonomy/reference/location-contexts/SectionContext" "See more details" _self;
`} caption="Figure: Diagram of OverlayContext inheritance" baseColor="blue" />

### Properties
None.