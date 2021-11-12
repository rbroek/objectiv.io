---
sidebar_position: 1
title: Overview
---

import Mermaid from '@theme/Mermaid';

AbstractContexts define either properties required by [Collectors](/tracking/core-concepts/collector.md) or 
internal ones, ensuring hierarchical uniqueness.

See the diagram below for the base Contexts that inherit from AbstractContext. Click each to learn more.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
		AbstractContext --> AbstractLocationContext;
`} 
  caption="Diagram: AbstractContexts" 
  baseColor="blue"
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/abstract-contexts/AbstractLocationContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/abstract-contexts/AbstractGlobalContext' }
  ]}
/>
