---
sidebar_position: 2
slug: /taxonomy/global-contexts
title: Overview
---

import Mermaid from '@theme/Mermaid';

Global contexts add global / general information about an Event. They carry information that is not related 
to where the Event originated (location), such as device, platform or business data.

See the diagram below for the Global Contexts. Click each to learn more.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> ApplicationContext;
    AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
    AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>message: string</span>"];
    AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
    AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
    AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "#abstractglobalcontext" "See more details" _self;
    click ApplicationContext "/docs/taxonomy/global-contexts/ApplicationContext" "See more details" _self;
    click DeviceContext "/docs/taxonomy/global-contexts/DeviceContext" "See more details" _self;
    click ErrorContext "/docs/taxonomy/global-contexts/ErrorContext" "See more details" _self;
    click CookieIdContext "/docs/taxonomy/global-contexts/CookieIdContext" "See more details" _self;
    click SessionContext "/docs/taxonomy/global-contexts/SessionContext" "See more details" _self;
    click HttpContext "/docs/taxonomy/global-contexts/HttpContext" "See more details" _self;
`} caption="Figure: Diagram of all Global Contexts" baseColor="blue" />

## AbstractGlobalContext
AbstractGlobalContext defines the bare minimum properties for every Global Context. All Global Contexts 
inherit from it.

### Properties
All inherited from [AbstractContext](/taxonomy/abstract-contexts/overview.md#abstractcontext).
