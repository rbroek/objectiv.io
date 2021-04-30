---
title: Contexts
slug: /taxonomy/contexts
sidebar_label: Contexts
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

This document describes the Contexts that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Mermaid chart={`
	graph LR
		AbstractContext --> AbstractLocationContext;
		AbstractContext --> AbstractGlobalContext;
		AbstractLocationContext --> SectionContext;
    AbstractLocationContext --> ItemContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>-url: string</span>"];
    SectionContext --> ScreenContext["ScreenContext<br><span class='properties'>-screen_name: string</span>"];
    SectionContext --> ExpandableSectionContext;
    SectionContext --> MediaPlayerContext;
    SectionContext --> NavigationContext;
    SectionContext --> OverlayContext;
    ItemContext --> InputContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>-path: string<br>-text: string</span>"];
    ActionContext --> ButtonContext;
    ActionContext --> LinkContext;
    AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>-user-agent: string</span>"];
    AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>-errors: Set</span>"];
    AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>-cookie_id: UUID</span>"];
    AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>-hit_number: integer</span>"];
    AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>-host: string<br>-user-agent: string<br>remote_addr: string</span>"];
    class AbstractLocationContext,SectionContext,ItemContext,WebDocumentContext,ScreenContext,ExpandableSectionContext,MediaPlayerContext,NavigationContext,OverlayContext,InputContext,ActionContext,ButtonContext,LinkContext diagram-yellow;
    click AbstractContext "#abstractcontext" "See more details" _self;
`} caption="Figure: Diagram of all Contexts" baseColor="blue" />

### AbstractContext
Base Context, providing basic properties to all Contexts.

**Properties:**
*   `id`: string. Short descriptive name. Example: `hero-button`.

TODO:
* How to use it
* Examples
* Debugging
* Tips & warnings

TODO:
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
