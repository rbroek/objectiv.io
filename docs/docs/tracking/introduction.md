---
sidebar_position: 1
slug: /tracking
---

# Introduction

Objectiv comes with a set of tools that help you set up error-free tracking instrumentation:
* A Tracker for several web & mobile platforms and frameworks;
* Validation & Debugging; and
* A Collector to receive, validate & store events.

See the diagram below for each major tracking component. Click for more detail.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	flowchart LR
    subgraph TrackerGraph["Tracking"]
      direction LR
      Tracker["Tracker"]---Tagging
      Tagging---Plugins
      Plugins---Validation
    end
    TrackerGraph --> EventsGraph
    subgraph EventsGraph["Events"]
      direction LR
      Event --- Location
    end
    EventsGraph --> Collector
    linkStyle 0,1,2,4 stroke:#fff,anything;
`} 
  caption="Figure: Objectiv Tracking" 
  baseColor="basic" 
  links={[
    { name: 'Tracker', to: '/tracking/core-concepts/trackers' },
    { name: 'Tagging', to: '/tracking/core-concepts/tagging' },
    { name: 'Plugins', to: '/tracking/core-concepts/trackers#extensibility-plugins' },
    { name: 'Validation', to: '/tracking/core-concepts/validation' },
    { name: 'Event', to: '/tracking/core-concepts/events' },
    { name: 'Location', to: '/tracking/core-concepts/locations' },
    { name: 'Collector', to: '/tracking/core-concepts/collector' }
  ]}
/>

## How-to Guides
To immediately jump into instrumenting your application, follow the step-by-step How-to Guides.

A number of web & mobile platforms and frameworks are currently supported, such as JS, React, React Native, 
and Angular - with more support coming.

[Follow the How-to Guides](/tracking/how-to-guides/overview.md)

## Core Concepts
To understand in more detail how the tracking works, read about the underlying core concepts.

[Read up on the Core Concepts](/tracking/core-concepts/overview.md)

## API Reference
To implement low-level functionality and configuration of the Trackers, all core APIs are open and documented. 

[Check out the API Reference](/tracking/api-reference/overview.mdx)