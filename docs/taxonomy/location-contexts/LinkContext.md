# LinkContext

Interactive element, representing a (hyper) link.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
    ActionContext --> LinkContext["LinkContext<br><span class='properties'>href: string"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click ItemContext "/docs/taxonomy/location-contexts/ItemContext" "See more details" _self;
    click ActionContext "/docs/taxonomy/location-contexts/ActionContext" "See more details" _self;
`} caption="Figure: Diagram of LinkContext inheritance" baseColor="blue" />

### Properties
|               | type        | description
| :--           | :--         | :--           
| **href**      | string      | URL (href) the link points to.
