---
sidebar_position: 1
slug: /taxonomy
---

# Overview

Objectiv's open taxonomy of analytics is a proposal for a common way to collect, structure, and validate data. It defines classes for each common event type and the contexts in which they can happen. It also describes
their properties, requirements, and relationships with other classes.

Using the open taxonomy ensures models & data can be reused, and data scientists can build on the knowledge 
and practices of others.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph TD
    Event["Event&lt;AbstractEvent&gt;"]--*--> GlobalContext["GlobalContext&lt;AbstractContext&gt;"]
    Event--*--> LocationContext["LocationContext&lt;AbstractContext&gt;"]
    click Event href "/docs/taxonomy/events/" "See more details" _self
    click GlobalContext href "/docs/taxonomy/global-contexts/" "See more details" _self
    click LocationContext href "/docs/taxonomy/location-contexts/" "See more details" _self
`} caption="Click on one of the definitions to learn more" baseColor="basic" />


<!-- <Mermaid chart={`
	classDiagram
    Event --|> "*" GlobalContext~AbstractContext~
    Event --|> "*" LocationContext~AbstractContext~
    class Event{
      array~GlobalContext~ global_contexts
      array~LocationContext~ location_stack
      +string _type
      +string id
      +integer time
      requires(~ApplicationContext~)
    }
    link Event "http://www.github.com" "This is a link"
    class GlobalContext{
      +string _type
      +string id
    }
    class LocationContext{
      +string _type
      +string id
    }
    click Event href "/docs/taxonomy/events/" "See more details" _self
`} caption="Click on one of the definitions to learn more" baseColor="basic" /> -->
