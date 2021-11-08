# NonInteractiveEvent

The parent of [Events](/taxonomy/events) that are not (directly) triggered by an interaction. 

For example, consider the following flow of events:

  1. Press 'play' button in a video player -> ButtonEvent -> InteractiveEvent
  2. Videoplayer starting playback -> MediaStartEvent -> NonInteractiveEvent

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
`} caption="Figure: Diagram of NonInteractiveEvent inheritance" baseColor="blue" />

### Requires
- None.