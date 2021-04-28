---
title: Contexts
slug: /taxonomy/contexts
sidebar_label: Contexts
sidebar_position: 2
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Lightbox from '/src/components/lightbox';

This document describes the Contexts that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Lightbox 
  src={useBaseUrl('/img/docs/contexts-diagram-horizontal.svg')} 
  title="Diagram: All Contexts"
  caption="Diagram of all Contexts"
  size="l" 
/>

### AbstractContext

Base Context, providing basic properties to all Contexts.

**Properties:**



*   `id`: string. Short descriptive name. Example: `hero-button`.

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
