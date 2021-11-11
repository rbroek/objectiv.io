# WebDocumentContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext.md) that carries a path in the ```URL``` property, representing a high-level location in the application.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>url: string</span>"];
    click AbstractContext "/docs/taxonomy/reference/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click SectionContext "/docs/taxonomy/reference/location-contexts/SectionContext" "See more details" _self;
`} caption="Figure: Diagram of WebDocumentContext inheritance" baseColor="blue" />

### Properties
|                | type        | description
| :--            | :--         | :--           
| **url**        | string      | Property containing a (valid) URL.
