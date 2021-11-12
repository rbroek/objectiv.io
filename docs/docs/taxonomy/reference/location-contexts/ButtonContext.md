# ButtonContext

An [ActionContext](/taxonomy/reference/location-contexts/ActionContext) that describes an interactive element that represents a button.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
    ActionContext --> ButtonContext;
`} 
  caption="Diagram: ButtonContext inheritance" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'ActionContext', to: '/taxonomy/reference/location-contexts/ActionContext' },
    { name: 'ButtonContext', to: '/taxonomy/reference/location-contexts/ButtonContext' }
  ]}
/>

### Properties
None.