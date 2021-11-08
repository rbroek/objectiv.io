# MediaPlayerContext

A [SectionContext](/taxonomy/location-contexts/SectionContext) that describes a section of the UI containing a media player.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> MediaPlayerContext;
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click SectionContext "/docs/taxonomy/location-contexts/SectionContext" "See more details" _self;
`} caption="Figure: Diagram of MediaPlayerContext inheritance" baseColor="blue" />

### Properties
None.