# VideoPauseEvent

A [VideoEvent](/docs/taxonomy/events/VideoEvent) that's emitted after a video pauses playback.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
    VideoEvent --> VideoPauseEvent;
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/events/NonInteractiveEvent" "See more details" _self;
    click VideoEvent "/docs/taxonomy/events/VideoEvent" "See more details" _self;
`} caption="Figure: Diagram of VideoPauseEvent inheritance" baseColor="blue" />

### Requires
- None.