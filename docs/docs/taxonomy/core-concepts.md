---
sidebar_position: 2
slug: /taxonomy/core-concepts
title: Core Concepts
---

# Core Concepts

## A proposal for an open taxonomy
The Objectiv Taxonomy is [our](https://objectiv.io/about/) proposal for a common way to collect, structure, 
and validate analytics data. 

We aim to tackle the problems that most data scientists face: 
* Having to spend a significant amount of time on prepwork to ensure data is ready for modeling; and
* Having to usually build models from scratch, because there is no common way to structure data or share 
  models - even though data teams often have very similar goals.

### Our proposed solution
* An initial set of classes for common event types, and the context in which they can happen;
* Their properties, requirements, and relationships with other classes;
* Plus: [tracking](/tracking/introduction.md), [collecting](/tracking/core-concepts/collector.md), and 
  [modeling](/modeling) implementations that fully build on the taxonomy.

### We're actively looking for feedback
Just like the rest of the code, the taxonomy is open source and we're building it in public. We're actively 
looking for feedback. 

If you have any ideas or opinions on where to take it next, please see our 
[Contribution Guide](/the-project/contributing.md).


## Events & Contexts
TODO


import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph TD
    Event["Event&lt;AbstractEvent&gt;"]--*--> GlobalContext["GlobalContext&lt;AbstractContext&gt;"]
    Event--*--> LocationContext["LocationContext&lt;AbstractContext&gt;"]
`}
  caption="Click on one of the definitions to learn more" 
  baseColor="basic" 
  links={[
    { name: 'Event', to: '/taxonomy/events/' }, 
    { name: 'GlobalContext', to: '/taxonomy/global-contexts/' }, 
    { name: 'LocationContext', to: '/taxonomy/location-contexts/' }, 
  ]}
/>

### Location Contexts
TODO

### Global Contexts
TODO

### Events
TODO

## Map a contextual layer to your application
TODO
