# ExpandableSectionContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext) that describes a section of the UI that can toggle between visible and hidden states.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> ExpandableSectionContext;
`} 
  caption="Diagram: ExpandableSectionContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'ExpandableSectionContext', to: '/taxonomy/reference/location-contexts/ExpandableSectionContext' }
  ]}
/>

### Properties
None.