---
sidebar_position: 1
slug: /taxonomy/location-contexts
title: Overview
---

import Mermaid from '@theme/Mermaid';

LocationContexts are used to populate a [Tracker's](/tracking/core-concepts/trackers) or 
[Event's](/tracking/core-concepts/events.md) `location_stack` properties.  A Location Stack is a visual representation of the UI location where a user is when an [Event](/tracking/core-concepts/events.md) occurs.  It is composed of a hierarchical stack of UI elements, meaning that the 
order in the stack is the order in the UI as well.

See the diagram below for the Location Contexts. Click each to learn more.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>url: string</span>"];
    SectionContext --> ScreenContext["ScreenContext<br /><span class='properties'>screen: string</span>"];
    SectionContext --> ExpandableSectionContext;
    SectionContext --> MediaPlayerContext;
    SectionContext --> NavigationContext;
    SectionContext --> OverlayContext;
    AbstractLocationContext --> ItemContext;
    ItemContext --> InputContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
    ActionContext --> ButtonContext;
    ActionContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
`} 
  caption="Diagram: Location Contexts" 
  baseColor="blue" 
  links={[
    { name: 'AbstractContext', to: '/taxonomy/reference/abstract-contexts/AbstractContext' },
    { name: 'AbstractLocationContext', to: '/taxonomy/reference/location-contexts/AbstractLocationContext' },
    { name: 'SectionContext', to: '/taxonomy/reference/location-contexts/SectionContext' },
    { name: 'WebDocumentContext', to: '/taxonomy/reference/location-contexts/WebDocumentContext' },
    { name: 'ScreenContext', to: '/taxonomy/reference/location-contexts/ScreenContext' },
    { name: 'ExpandableSectionContext', to: '/taxonomy/reference/location-contexts/ExpandableSectionContext' },
    { name: 'MediaPlayerContext', to: '/taxonomy/reference/location-contexts/MediaPlayerContext' },
    { name: 'NavigationContext', to: '/taxonomy/reference/location-contexts/NavigationContext' },
    { name: 'OverlayContext', to: '/taxonomy/reference/location-contexts/OverlayContext' },
    { name: 'ItemContext', to: '/taxonomy/reference/location-contexts/ItemContext' },
    { name: 'InputContext', to: '/taxonomy/reference/location-contexts/InputContext' },
    { name: 'ActionContext', to: '/taxonomy/reference/location-contexts/ActionContext' },
    { name: 'ButtonContext', to: '/taxonomy/reference/location-contexts/ButtonContext' },
    { name: 'LinkContext', to: '/taxonomy/reference/location-contexts/LinkContext' }
  ]}
/>
