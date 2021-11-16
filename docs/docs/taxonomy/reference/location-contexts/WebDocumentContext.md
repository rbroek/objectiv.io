# WebDocumentContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext.md) that carries a path in the ```URL``` property, representing a high-level location in the application.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>url: string</span>"];
    class WebDocumentContext diagramActive;
`} 
  caption="Diagram: WebDocumentContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'WebDocumentContext', to: '/taxonomy/reference/location-contexts/WebDocumentContext' },
  ]}
/>

### Properties
|                | type        | description
| :--            | :--         | :--           
| **url**        | string      | Property containing a (valid) URL.
