---
sidebar_position: 1
slug: /
---

# Introduction

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

Welcome to the official Objectiv documentation.

Objectiv is a data collection & modeling library that puts the data scientist first. It is built around [the open taxonomy of analytics](/docs/taxonomy), which is our proposal for a common way to collect, structure and validate data. With Objectiv, you create a [contextual layer for your application](tracking/core-concepts/tagging) by mapping it to the taxonomy, with the goal of collecting better data and more effective modeling.

:::note Quick Reference
*  Want to jump right in? Go to [Quickstart](/quickstart.md).
*  Have a question or need support? Join the conversation in [Objectiv's Slack channels](https://join.slack.com/t/objectiv-io/shared_invite/zt-u6xma89w-DLDvOB7pQer5QUs5B_~5pg).
*  Found a bug, or have a feature requests? Let us know in our [GitHub Issues](https://github.com/objectiv).
*  Curious about what we'll work on next? See [our roadmap in GitHub](https://github.com/objectiv/objectiv-analytics/projects/2).
:::

Below a concise overview of the various areas in Objectiv, with click-throughs to their respective documentation sections.

<Mermaid chart={`
	graph TD
    Tracking --- Taxonomy;
    Modeling --- Taxonomy;
    linkStyle 0,1 stroke:#000,anything;
    click Tracking "/docs/tracking" "See more details" _self;
    click Modeling "/docs/modeling" "See more details" _self;
    click Taxonomy "/docs/taxonomy" "See more details" _self;
    class Tracking,Modeling,Taxonomy diagramBlocks;
`} caption="Figure: Diagram of all Objectiv Areas" baseColor="basic" />
