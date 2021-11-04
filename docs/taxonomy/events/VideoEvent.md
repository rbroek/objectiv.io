# VideoEvent

The parent of [non-interactive events](/docs/taxonomy/events/NonInteractiveEvent) that are triggered by a video player. It requires a [MediaPlayerContext](/docs/taxonomy/location-contexts/MediaPlayerContext) to detail the origin of the event.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/events/NonInteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of VideoEvent inheritance" baseColor="blue" />

### Requires
- [MediaPlayerContext](/taxonomy/location-contexts/MediaPlayerContext.md).