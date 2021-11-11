---
sidebar_position: 3
slug: /taxonomy/events
title: Overview
sidebar_label: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

Events must provide an `id` and optionally can, but most likely will, carry a list of [LocationContexts](/taxonomy/reference/location-contexts/overview.md) and [GlobalContexts](/taxonomy/reference/global-contexts/overview.md). Additionally, every event must have an [ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) to be able to distinguish from what 
application the event originated.

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    AbstractEvent --> InteractiveEvent;
    InteractiveEvent["InteractiveEvent<br /><span class='properties'>requires:<br />SectionContext</span>"] --> ClickEvent;
    InteractiveEvent --> InputChangeEvent["InputChangeEvent<br /><span class='properties'>requires:<br />InputContext</span>"];
    NonInteractiveEvent --> CompletedEvent;
    NonInteractiveEvent --> AbortedEvent["AbortedEvent<br /><span class='properties'>requires:<br />ErrorContext</span>"];
    NonInteractiveEvent --> DocumentLoadedEvent["DocumentLoadedEvent<br /><span class='properties'>requires:<br />WebDocumentContext</span>"];
    NonInteractiveEvent --> URLChangeEvent["URLChangeEvent<br /><span class='properties'>requires:<br />WebDocumentContext</span>"];
    NonInteractiveEvent --> ApplicationLoadedEvent["ApplicationLoadedEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    NonInteractiveEvent --> SectionVisibleEvent["SectionVisibleEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    NonInteractiveEvent --> SectionHiddenEvent["SectionHiddenEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
    VideoEvent --> VideoLoadEvent;
    VideoEvent --> VideoPauseEvent;
    VideoEvent --> VideoStopEvent;
    VideoEvent --> VideoStartEvent;
    click AbstractEvent "/docs/taxonomy/reference/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/reference/events/NonInteractiveEvent" "See more details" _self;
    click CompletedEvent "/docs/taxonomy/reference/events/CompletedEvent" "See more details" _self;
    click AbortedEvent "/docs/taxonomy/reference/events/AbortedEvent" "See more details" _self;
    click DocumentLoadedEvent "/docs/taxonomy/reference/events/DocumentLoadedEvent" "See more details" _self;
    click URLChangeEvent "/docs/taxonomy/reference/events/URLChangeEvent" "See more details" _self;
    click ApplicationLoadedEvent "/docs/taxonomy/reference/events/ApplicationLoadedEvent" "See more details" _self;
    click SectionVisibleEvent "/docs/taxonomy/reference/events/SectionVisibleEvent" "See more details" _self;
    click SectionHiddenEvent "/docs/taxonomy/reference/events/SectionHiddenEvent" "See more details" _self;
    click VideoEvent "/docs/taxonomy/reference/events/VideoEvent" "See more details" _self;
    click VideoLoadEvent "/docs/taxonomy/reference/events/VideoLoadEvent" "See more details" _self;
    click VideoPauseEvent "/docs/taxonomy/reference/events/VideoPauseEvent" "See more details" _self;
    click VideoStopEvent "/docs/taxonomy/reference/events/VideoStopEvent" "See more details" _self;
    click VideoStartEvent "/docs/taxonomy/reference/events/VideoStartEvent" "See more details" _self;
    click InteractiveEvent "/docs/taxonomy/reference/events/InteractiveEvent" "See more details" _self;
    click ClickEvent "/docs/taxonomy/reference/events/ClickEvent" "See more details" _self;
    click InputChangeEvent "/docs/taxonomy/reference/events/InputChangeEvent" "See more details" _self;
`} caption="Figure: Diagram of all Events" baseColor="blue" />