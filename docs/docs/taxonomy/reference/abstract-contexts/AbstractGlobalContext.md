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
    class AbstractGlobalContext diagramActive;
`} 
  caption="Diagram: AbstractGlobalContext inheritance" 
  baseColor="blue"
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/abstract-contexts/AbstractGlobalContext' }
  ]}
/>

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
