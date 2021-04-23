---
title: The Taxonomy
slug: /the-taxonomy
---




# WIP: The Taxonomy

The Objectiv Taxonomy is a standardized, yet extensible, set of events & event properties for product analytics tracking, built with the data scientist in mind. 

It covers any UI element and captures its location, along with any relevant contextual information. The resulting data can then be queried at any aggregation level. A range of models are provided off-the-shelf to use in notebooks and SQL, making it also easy to integrate into existing BI (see the Modeling section).

An example of a ‘button click’ event captured in the Objectiv Taxonomy, along with its location and contextual information:

```json

[TODO]

```

This document covers the core concepts of the Taxonomy, provides an implementation & analysis reference for each, and shows several examples.


## Core Taxonomy Concepts


### Event

Anything occurring on your website or application can be captured in Events. There are two types of Events:



*   **Interactive Events: **When a user actively does something. For example, a user clicking a button or changing an input field. 
*   **Non-Interactive Events**: When something happens without the user actively doing anything. For example, loading a page.

See the Reference: Events section for all standardized Events, with examples of when they’re used.


### Location

TODO



*   Always keep track of where an event happens (SDKs ensure this).
*   Uniqueness guaranteed: There will never be multiple tracker instances with the same location stack. This works by hashing the context type and id, together with the hash of the parent context. 
*   Aggregate on any level


### Context

TODO



*   type
*   id


## Inheritance & Extensibility

TODO


## Reference: Contexts



*   Base “AbstractContext”: TODO
    *   id: string
*   AbstractLocationContext &lt; AbstractContext: TODO
*   AbstractGlobalContext &lt; AbstractContext: TODO
*   SectionContext &lt; AbstractLocationContext: TODO
*   WebDocumentContext &lt; AbstractRootSectionContext: TODO
    *   url: string
    *   Added the `url` attribute back in the  WebDocumentContext. This adds flexibility when tracking multiple documents (for example: iframes).
*   ScreenContext &lt; AbstractRootSectionContext: TODO
    *   screen: string
    *   Added ScreenContext as an example of a RootContext for native mobile.
*   ExpandableSectionContext &lt; SectionContext
*   MediaPlayerContext &lt; SectionContext: TODO
*   NavigationContext &lt; SectionContext: TODO
*   OverlayContext &lt; SectionContext: TODO
*   ItemContext &lt; Context: TODO
*   InputContext &lt; ItemContext: TODO
*   ActionContext &lt; ItemContext: TODO
    *   oneOf(
        *   path: string
        *   text: string
*   ButtonContext &lt; ActionContext: TODO
*   LinkContext &lt; ActionContext: TODO
*   DeviceContext &lt; AbstractGlobalContext: TODO
    *   user-agent: string
*   ErrorContext &lt; AbstractGlobalContext: TODO
    *   errors: object
*   CookieIdContext &lt; AbstractGlobalContext: TODO
    *   cookie_id: string
*   SessionContext &lt; AbstractGlobalContext: TODO
    *   hitNumber: integer
*   HttpContext &lt; AbstractGlobalContext: TODO
    *   host: string
    *   user-agent: string
    *   remote_addr: string
    *   [opt] referrer: string


## Reference: Events



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
