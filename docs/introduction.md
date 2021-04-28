---
title: Introduction
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Lightbox from '/src/components/lightbox';
import Mermaid from '@theme/Mermaid';

Welcome to the official Objectiv documentation. 
<!-- TBD: make these buttons instead of a list? -->
*  Want to jump right in? Go to [Getting Started](getting-started).
*  Have a question or need support? Join the conversation on the [Objectiv Discourse Forum](https://discourse.objectiv.io).
*  Found a bug, or have a feature requests? Let us know in our [GitHub Issues](https://github.com/objectiv).
*  Curious about our Roadmap? See [our roadmap in GitHub](https://github.com/objectiv).

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
`} caption="Figure: Diagram of all Objectiv Areas" />


<!-- <Mermaid chart={`
  gantt
    dateFormat  YYYY-MM-DD
    Tracking      :t, 2021-01-01, 1d
    Collecting    :t, 2021-01-03, 1d
`} caption="Figure: Diagram of all Objectiv Areas" /> -->

<!-- <Lightbox 
  src={useBaseUrl('/img/docs/overview-areas.svg')} 
  title="Diagram: All Areas"
  caption="Diagram of all Objectiv Areas"
  size="l" 
/> -->

## Taxonomy
The foundation of Objectiv is the taxonomy. 

For more information, see [The Taxonomy section](taxonomy/overview).

## Tracking
TODO

For more information, see [Setting Up The Tracker](setting-up-the-tracker).

## Collecting & Validating
TODO

For more information, see [Collecting & Validating Events](collecting-and-validating-events).

## Modeling
TODO

For more information, see [Modeling The Data](modeling-the-data).

## Deploying
TODO

For more information, see [Deploying To Production](deploying-to-production).