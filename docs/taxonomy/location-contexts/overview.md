---
sidebar_position: 1
slug: /taxonomy/location-contexts
title: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

This section describes the Location Contexts that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Mermaid chart={`
	graph LR
		AbstractContext --> AbstractLocationContext;
		AbstractLocationContext --> SectionContext;
    AbstractLocationContext --> ItemContext;
    SectionContext --> WebDocumentContext["WebDocumentContext<br><span class='properties'>-url: string</span>"];
    SectionContext --> ScreenContext["ScreenContext<br><span class='properties'>-screen_name: string</span>"];
    SectionContext --> ExpandableSectionContext;
    SectionContext --> MediaPlayerContext;
    SectionContext --> NavigationContext;
    SectionContext --> OverlayContext;
    ItemContext --> InputContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>-path: string<br>-text: string</span>"];
    ActionContext --> ButtonContext;
    ActionContext --> LinkContext;
    class AbstractLocationContext,SectionContext,ItemContext,WebDocumentContext,ScreenContext,ExpandableSectionContext,MediaPlayerContext,NavigationContext,OverlayContext,InputContext,ActionContext,ButtonContext,LinkContext diagram-yellow;
    click AbstractContext "#abstractcontext" "See more details" _self;
`} caption="Figure: Diagram of all Contexts" baseColor="blue" />