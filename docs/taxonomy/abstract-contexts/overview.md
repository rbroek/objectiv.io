---
sidebar_position: 1
title: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';


This section describes the Abstract Contexts that are standardized in the Objectiv taxonomy; see the diagram below for an overview.

<Mermaid chart={`
	graph LR
		AbstractContext --> AbstractLocationContext;
		AbstractContext --> AbstractGlobalContext;
`} caption="Figure: Diagram of all Abstract Contexts" baseColor="blue" />