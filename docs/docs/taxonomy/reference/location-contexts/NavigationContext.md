# NavigationContext

A [SectionContext](/taxonomy/reference/location-contexts/SectionContext) that describes a section of the UI containing navigational elemens, for example a menu.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> NavigationContext;
`} 
  caption="Diagram: NavigationContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' }
  ]}
/>

### Properties
None.