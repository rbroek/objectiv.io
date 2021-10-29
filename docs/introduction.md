---
sidebar_position: 1
slug: /
---

# Introduction

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

Welcome to the official Objectiv documentation.

:::note Quick Reference
*  Want to jump right in? Go to [Quickstart](/quickstart.md).
*  Have a question or need support? Join the conversation on the [Objectiv Discourse Forum](https://discourse.objectiv.io).
*  Found a bug, or have a feature requests? Let us know in our [GitHub Issues](https://github.com/objectiv).
*  Curious about our Roadmap? See [our roadmap in GitHub](https://github.com/objectiv).
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
