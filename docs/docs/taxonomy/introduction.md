---
sidebar_position: 1
slug: /taxonomy
title: Introduction
---

# Introduction

Objectiv's open taxonomy of analytics is a proposal for a common way to collect, structure, and validate data. It defines classes for each common event type and the contexts in which they can happen. It also describes
their properties, requirements, and relationships with other classes.

Using the open taxonomy ensures models & data can be reused, and data scientists can build on the knowledge 
and practices of others.

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
