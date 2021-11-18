---
sidebar_position: 2
title: AbstractContext
---

import Mermaid from '@theme/Mermaid';

## AbstractContext
AbstractContext defines the bare minimum properties for every Context. All Contexts inherit from it.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
		AbstractContext --> AbstractLocationContext;
    class AbstractContext diagramActive;
`} 
  caption="Diagram: AbstractContext inheritance" 
  baseColor="blue"
  links={[
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/abstract-contexts/AbstractLocationContext' },
    { name: 'AbstractGlobalContext', to: '/taxonomy/reference/abstract-contexts/AbstractGlobalContext' }
  ]}
/>


### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | A unique string identifier to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | A string literal used during serialization. Should always match the Context interface name.
