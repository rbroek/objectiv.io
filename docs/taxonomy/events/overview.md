---
sidebar_position: 3
slug: /taxonomy/events
title: Overview
sidebar_label: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

This document describes the Events that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
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
    AbstractEvent --> InteractiveEvent;
    InteractiveEvent["InteractiveEvent<br /><span class='properties'>requires:<br />SectionContext</span>"] --> ClickEvent;
    InteractiveEvent --> InputChangeEvent["InputChangeEvent<br /><span class='properties'>requires:<br />InputContext</span>"];
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/events/NonInteractiveEvent" "See more details" _self;
    click CompletedEvent "/docs/taxonomy/events/CompletedEvent" "See more details" _self;
    click AbortedEvent "/docs/taxonomy/events/AbortedEvent" "See more details" _self;
    click DocumentLoadedEvent "/docs/taxonomy/events/DocumentLoadedEvent" "See more details" _self;
    click URLChangeEvent "/docs/taxonomy/events/URLChangeEvent" "See more details" _self;
    click ApplicationLoadedEvent "/docs/taxonomy/events/ApplicationLoadedEvent" "See more details" _self;
    click SectionVisibleEvent "/docs/taxonomy/events/SectionVisibleEvent" "See more details" _self;
    click SectionHiddenEvent "/docs/taxonomy/events/SectionHiddenEvent" "See more details" _self;
    click VideoEvent "/docs/taxonomy/events/VideoEvent" "See more details" _self;
    click VideoLoadEvent "/docs/taxonomy/events/VideoLoadEvent" "See more details" _self;
    click VideoPauseEvent "/docs/taxonomy/events/VideoPauseEvent" "See more details" _self;
    click VideoStopEvent "/docs/taxonomy/events/VideoStopEvent" "See more details" _self;
    click VideoStartEvent "/docs/taxonomy/events/VideoStartEvent" "See more details" _self;
    click InteractiveEvent "/docs/taxonomy/events/InteractiveEvent" "See more details" _self;
    click ClickEvent "/docs/taxonomy/events/ClickEvent" "See more details" _self;
    click InputChangeEvent "/docs/taxonomy/events/InputChangeEvent" "See more details" _self;
`} caption="Figure: Diagram of all Events" baseColor="blue" />