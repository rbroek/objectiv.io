---
title: Events
slug: /taxonomy/events
sidebar_label: Events
sidebar_position: 3
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Lightbox from '/src/components/lightbox';

This document describes the Events that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Lightbox 
  src={useBaseUrl('/img/docs/events-diagram-horizontal.svg')} 
  title="Diagram: All Events"
  caption="Diagram of all Events"
  size="l" 
/>

TODO:
*   Base “AbstractEvent”: TODO
    *   requiresContext: AbstractContext
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
