# DeviceContext

A [GlobalContext](/docs/taxonomy/global-contexts) carrying meta information about the device that emitted the event.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> DeviceContext["DeviceContext<br><span class='properties'>user-agent: string</span>"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of DeviceContext inheritance" baseColor="blue" />

### Properties
|                 | type        | description
| :--             | :--         | :--           
| **user_agent**  | string      | String describing the user-agent that emitted the event.
