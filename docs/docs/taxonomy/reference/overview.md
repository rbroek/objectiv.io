---
sidebar_position: 1
slug: /taxonomy/reference
title: Overview
---

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