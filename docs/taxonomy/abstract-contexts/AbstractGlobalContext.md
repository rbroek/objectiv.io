# AbstractGlobalContext

import Mermaid from '@theme/Mermaid';

GlobalContexts are used to populate [Trackers](/docs/tracking/core-concepts/trackers) or [Events](/docs/tracking/core-concepts/events) with `global_contexts` properties. They carry 
information that is not related to where the Event originated, such as device, platform or business data.

See [Global Contexts](/docs/taxonomy/global-contexts) for all Contexts that inherit from AbstractGlobalContext.

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: AbstractGlobalContext inheritance" baseColor="blue" />

### Properties
All inherited from [AbstractContext](/taxonomy/abstract-contexts/overview.md#abstractcontext).
