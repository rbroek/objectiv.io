---
sidebar_position: 3
title: AbstractGlobalContext
---

# AbstractGlobalContext

import Mermaid from '@theme/Mermaid';

This is the abstract parent of all [Global Contexts](/taxonomy/reference/global-contexts/overview.md). Global Contexts are used to populate [Trackers](/tracking/core-concepts/trackers.md) or [Events](/tracking/core-concepts/events.md) with `global_contexts` properties. They carry 
information that is not related to where the Event originated, such as device, platform or business data.

See [Global Contexts](/taxonomy/reference/global-contexts/overview.md) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> ApplicationContext;
    AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
    AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>message: string</span>"];
    AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
    AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
    AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
    class AbstractGlobalContext diagramActive;
`} 
  caption="Diagram: AbstractGlobalContext inheritance" 
  baseColor="blue"
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'ApplicationContext', to: '/taxonomy/reference/global-contexts/ApplicationContext' },
    { name: 'DeviceContext', to: '/taxonomy/reference/global-contexts/DeviceContext' },
    { name: 'ErrorContext', to: '/taxonomy/reference/global-contexts/ErrorContext' },
    { name: 'CookieIdContext', to: '/taxonomy/reference/global-contexts/CookieIdContext' },
    { name: 'SessionContext', to: '/taxonomy/reference/global-contexts/SessionContext' },
    { name: 'HttpContext', to: '/taxonomy/reference/global-contexts/HttpContext' }
]}
/>

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
