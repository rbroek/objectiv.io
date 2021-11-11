---
sidebar_position: 1
slug: /taxonomy/location-contexts
title: Overview
---

import Mermaid from '@theme/Mermaid';

LocationContexts are used to populate a [Tracker's](/tracking/core-concepts/trackers) or [Event's](/tracking/core-concepts/events.md) `location_stack` properties. A Location Stack is 
meant to describe accurately where an [Event](/tracking/core-concepts/events.md) originated in the UI, e.g. Sections, Menus, etc.

See the diagram below for the Location Contexts. Click each to learn more.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    AbstractLocationContext --> ItemContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>url: string</span>"];
    SectionContext --> ScreenContext["ScreenContext<br /><span class='properties'>screen: string</span>"];
    SectionContext --> ExpandableSectionContext;
    SectionContext --> MediaPlayerContext;
    SectionContext --> NavigationContext;
    SectionContext --> OverlayContext;
    ItemContext --> InputContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
    ActionContext --> ButtonContext;
    ActionContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
    click AbstractContext "/docs/taxonomy/reference/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click SectionContext "/docs/taxonomy/reference/location-contexts/SectionContext" "See more details" _self;
    click ItemContext "/docs/taxonomy/reference/location-contexts/ItemContext" "See more details" _self;
    click WebDocumentContext "/docs/taxonomy/reference/location-contexts/WebDocumentContext" "See more details" _self;
    click ScreenContext "/docs/taxonomy/reference/location-contexts/ScreenContext" "See more details" _self;
    click ExpandableSectionContext "/docs/taxonomy/reference/location-contexts/ExpandableSectionContext" "See more details" _self;
    click MediaPlayerContext "/docs/taxonomy/reference/location-contexts/MediaPlayerContext" "See more details" _self;
    click NavigationContext "/docs/taxonomy/reference/location-contexts/NavigationContext" "See more details" _self;
    click OverlayContext "/docs/taxonomy/reference/location-contexts/OverlayContext" "See more details" _self;
    click InputContext "/docs/taxonomy/reference/location-contexts/InputContext" "See more details" _self;
    click ActionContext "/docs/taxonomy/reference/location-contexts/ActionContext" "See more details" _self;
    click ButtonContext "/docs/taxonomy/reference/location-contexts/ButtonContext" "See more details" _self;
    click LinkContext "/docs/taxonomy/reference/location-contexts/LinkContext" "See more details" _self;
`} caption="Figure: Diagram of all Contexts" baseColor="blue" />

## AbstractLocationContext
AbstractLocationContext defines the bare minimum properties for every Location Context. All Location Contexts 
inherit from it.

### Properties
All inherited from [AbstractContext](/taxonomy/reference/abstract-contexts/overview.md#abstractcontext).
