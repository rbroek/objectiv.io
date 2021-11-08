---
sidebar_position: 1
title: Overview
---

import Mermaid from '@theme/Mermaid';

AbstractContexts define either properties required by [Collectors](/tracking/core-concepts/collector.md) or internal ones, ensuring hierarchical 
uniqueness.

<!--- (what is meant by internal ones? custom defined properties?) -->

See the diagram below for the base Contexts that inherit from AbstractContext. Click each to learn more.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractContext --> AbstractGlobalContext;
    click AbstractLocationContext "/docs/taxonomy/abstract-contexts/AbstractLocationContext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of AbstractContexts" baseColor="blue" />

## AbstractContext
AbstractContext defines the bare minimum properties for every Context. All Contexts inherit from it.

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | A unique string identifier to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | A string literal used during serialization. Should always match the Context interface name.
