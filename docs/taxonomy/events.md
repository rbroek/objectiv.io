---
title: Events
slug: /taxonomy/events
sidebar_label: Events
sidebar_position: 3
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

### AbstractEvent
Base Event, providing basic properties to all Events.

**Contexts Required:**
*  [AbstractContext](contexts#abstractcontext)

TODO:
* How to use it
* Examples
* Debugging
* Tips & warnings

TODO:
*   NonInteractiveEvent &lt; AbstractEvent: TODO
*   DocumentLoadedEvent &lt; NonInteractiveEvent: TODO
    *   requiresContext: WebDocumentContext
*   URLChangeEvent &lt; NonInteractiveEvent: TODO
    *   requiresContext: WebDocumentContext
*   ApplicationLoadedEvent &lt; NonInteractiveEvent: TODO (in React tracker: [‘useMount()](https://gitlab.com/newrelity/objectiv-taxonomy-prototypes/-/commit/03cc1410)’)
    *   requiresContext: AbstractRootSectionContext
*   SectionVisibleEvent &lt; NonInteractiveEvent: TODO
    *   requiresContext: SectionContext
*   SectionHiddenEvent &lt; NonInteractiveEvent: TODO
    *   requiresContext: SectionContext
*   VideoEvent &lt; NonInteractiveEvent: TODO
    *   requiresContext: MediaPlayerContext
*   VideoLoadEvent &lt; VideoEvent: TODO
    *   requiresContext: MediaPlayerContext
*   VideoStartEvent &lt; VideoEvent: TODO
*   VideoStopEvent &lt; VideoEvent: TODO
*   VideoPauseEvent &lt; VideoEvent: TODO
*   InteractiveEvent &lt; AbstractEvent: TODO
    *   requiresContext: RootSectionContext
*   ClickEvent &lt; InteractiveEvent: TODO
*   ~~KeyDownEvent &lt; InteractiveEvent: TODO~~
    *   ~~requiresContext: KeyboardContext~~
*   InputChangeEvent &lt; InteractiveEvent: TODO
    *   requiresContext: InputContext

TODO: No forms, validation, keyboard, mouse, visibility nor value tracking enforcement. Developers can easily track any of the above by extending InputContext (eg: search). InputChangeEvent triggers only when an input loses focus and if its value changed

To Do: Track initial input values. For example if an input gets prefilled by the Application
