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
    AbstractEvent["AbstractEvent<br><span class='properties'>requires:<br>-AbstractContext</span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> VideoEvent["VideoEvent<br><span class='properties'>requires:<br>-MediaPlayerContext</span>"];
    VideoEvent --> VideoPauseEvent;
    VideoEvent --> VideoStopEvent;
    VideoEvent --> VideoStartEvent;
    VideoEvent --> VideoLoadEvent["VideoLoadEvent<br><span class='properties'>requires:<br>-MediaPlayerContext</span>"];
    NonInteractiveEvent --> SectionHiddenEvent["SectionHiddenEvent<br><span class='properties'>requires:<br>-SectionContext</span>"];
    NonInteractiveEvent --> SectionVisibleEvent["SectionVisibleEvent<br><span class='properties'>requires:<br>-SectionContext</span>"];
    NonInteractiveEvent --> ApplicationLoadedEvent["ApplicationLoadedEvent<br><span class='properties'>requires:<br>-SectionContext</span>"];
    NonInteractiveEvent --> URLChangeEvent["URLChangeEvent<br><span class='properties'>requires:<br>-WebDocumentContext</span>"];
    NonInteractiveEvent --> DocumentLoadedEvent["DocumentLoadedEvent<br><span class='properties'>requires:<br>-WebDocumentContext</span>"];
    AbstractEvent --> InteractiveEvent;
    InteractiveEvent["InteractiveEvent<br><span class='properties'>requires:<br>-RootSectionContext</span>"] --> ClickEvent;
    InteractiveEvent --> InputChangeEvent["InputChangeEvent<br><span class='properties'>requires:<br>-InputContext</span>"];
    click AbstractEvent "#abstractevent" "See more details" _self;
`} caption="Figure: Diagram of all Events" baseColor="pink" />