---
title: Introduction
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Lightbox from '/src/components/lightbox';
import Mermaid from '@theme/Mermaid';

Welcome to the official Objectiv documentation.

:::note Quick Reference

*  Want to jump right in? Go to [Getting Started](getting-started).
*  Have a question or need support? Join the conversation on the [Objectiv Discourse Forum](https://discourse.objectiv.io).
*  Found a bug, or have a feature requests? Let us know in our [GitHub Issues](https://github.com/objectiv).
*  Curious about our Roadmap? See [our roadmap in GitHub](https://github.com/objectiv).

:::

Objectiv is a product analytics pipeline that’s built with the data scientist in mind. It features a standardized event taxonomy that enables effective & reusable modeling on the data science side.

Events tracked with Objectiv carry enough context (e.g. location and marketing source) to be uniquely identifiable, while aggregation remains flexible. Event data is validated through the pipeline and is ready for modeling without the typical gruntwork. 

The taxonomy is extensible and enables you to take, build, combine and run reusable models for specific parts of your product. 

## Overview
Below a concise overview of the various areas in Objectiv, with click-throughs to their respective documentation sections.

<Mermaid chart={`
	graph TD
    Tracking --- Taxonomy;
    Collecting["Collecting &amp; Validating"] --- Taxonomy;
    Modeling --- Taxonomy;
    Deploying --- Taxonomy;
    linkStyle 0,1,2,3 stroke:#fff,anything;
    click Tracking "#tracking" "See more details" _self;
    click Collecting "#collecting--validating" "See more details" _self;
    click Modeling "#modeling" "See more details" _self;
    click Deploying "#deploying" "See more details" _self;
    click Taxonomy "#taxonomy" "See more details" _self;
    class Tracking,Collecting,Modeling,Deploying,Taxonomy diagramBlocks;
`} caption="Figure: Diagram of all Objectiv Areas" diagramType="basic" />

### Taxonomy
The foundation of Objectiv is the taxonomy. 

For more information, see [The Taxonomy section](taxonomy/overview).

### Tracking
TODO

For more information, see [Setting Up The Tracker](setting-up-the-tracker).

### Collecting & Validating
TODO

For more information, see [Collecting & Validating Events](collecting-and-validating-events).

### Modeling
TODO

For more information, see [Modeling The Data](modeling-the-data).

### Deploying
TODO

For more information, see [Deploying To Production](deploying-to-production).

## Mission
TODO:
* Mission
* Link to Mission

## VOD example
Throughout the documentation we'll be using examples from our imaginary Video On Demand service: [Rick On Demand](https://rick.objectiv.io), or ROD for short. <small>(no worries, the link is roll-free :))</small>. 

ROD covers a few tracking use cases that many applications  have: sections, navigation, overlays, media, and a funnel.

<Lightbox src="/img/docs/ROD-homepage.png" title="ROD homepage" caption="Figure: Rick On Demand (ROD) homepage" size="l" type="zoom" />
