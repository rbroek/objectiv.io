# ScreenContext

A [SectionContext](docs/taxonomy/location-contexts/SectionContext) A SectionContext that carries a path in the ```screen``` property, representing a high-level location in the application.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> ScreenContext["ScreenContext<br /><span class='properties'>screen: string</span>"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click SectionContext "/docs/taxonomy/location-contexts/SectionContext" "See more details" _self;
`} caption="Figure: Diagram of ScreenContext inheritance" baseColor="blue" />

### Properties
|                | type        | description
| :--            | :--         | :--           
| **screen**     | string      | Name of the screen.
