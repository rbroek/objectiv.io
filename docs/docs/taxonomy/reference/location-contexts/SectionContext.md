# SectionContext

SectionContext is a special [LocationContext](/taxonomy/reference/location-contexts/overview.md) representing a logical area of the UI or the system. It is used to build hierarchy and usually contains other [LocationContexts](/taxonomy/reference/location-contexts/overview.md). [Events](/taxonomy/events) typically target its children, not the SectionContext itself.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>url: string</span>"];
    SectionContext --> ScreenContext["ScreenContext<br /><span class='properties'>screen: string</span>"];
    SectionContext --> ExpandableSectionContext;
    SectionContext --> MediaPlayerContext;
    SectionContext --> NavigationContext;
    SectionContext --> OverlayContext;
`} 
  caption="Diagram: SectionContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'WebDocumentContext', to: '/taxonomy/reference/location-contexts/WebDocumentContext' },
    { name: 'ScreenContext', to: '/taxonomy/reference/location-contexts/ScreenContext' },
    { name: 'ExpandableSectionContext', to: '/taxonomy/reference/location-contexts/ExpandableSectionContext' },
    { name: 'MediaPlayerContext', to: '/taxonomy/reference/location-contexts/MediaPlayerContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' },
    { name: 'OverlayContext', to: '/taxonomy/reference/location-contexts/OverlayContext' }
  ]}
/>

### Properties
None.