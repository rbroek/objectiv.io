---
sidebar_position: 2
slug: /taxonomy/global-contexts
title: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

This section describes the Global Contexts that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Mermaid chart={`
	graph LR
		AbstractContext --> AbstractGlobalContext;
    AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>-user-agent: string</span>"];
    AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>-errors: Set</span>"];
    AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>-cookie_id: UUID</span>"];
    AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>-hit_number: integer</span>"];
    AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>-host: string<br>-user-agent: string<br>remote_addr: string</span>"];
    click AbstractContext "#abstractcontext" "See more details" _self;
`} caption="Figure: Diagram of all Global Contexts" baseColor="blue" />
