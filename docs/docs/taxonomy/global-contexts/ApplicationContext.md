# ApplicationContext

import Mermaid from '@theme/Mermaid';

A [GlobalContext](/taxonomy/global-contexts/overview.md) describing the origin (application id) of the event, in its `id`.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> ApplicationContext;
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of ApplicationContext inheritance" baseColor="blue" />

### Properties
None.
