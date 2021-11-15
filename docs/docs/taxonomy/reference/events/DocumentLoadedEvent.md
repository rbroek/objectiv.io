# DocumentLoadedEvent

A [NonInteractiveEvent](/taxonomy/reference/events/NonInteractiveEvent.md) that is emitted after a document finishes loading. It requires a 
[WebDocumentContext](/taxonomy/reference/location-contexts/WebDocumentContext) which describes the state (eg. URL) of the event.

:::note 
With SPAs this probably only happens once, as page (re)loads don't happen after the initial page load.
:::

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
    AbstractEvent --> NonInteractiveEvent;
    NonInteractiveEvent --> DocumentLoadedEvent["DocumentLoadedEvent<br /><span class='properties'>requires:<br />WebDocumentContext</span>"];
    class DocumentLoadedEvent diagramActive;
`} 
  caption="Diagram: DocumentLoadedEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' },
    { name: 'DocumentLoadedEvent', to: '/taxonomy/reference/events/DocumentLoadedEvent' }
  ]}
/>

### Requires
- [WebDocumentContext](/taxonomy/reference/location-contexts/WebDocumentContext.md).