# ActionContext

ActionContexts are a more specific version of ItemContext specifically meant to describe actionable Items. 
These represent interactive elements that will trigger an Interactive Event, e.g. a Button or a Link.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    ItemContext --> ActionContext["ActionContext<br><span class='properties'>text: string"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
    click ItemContext "/docs/taxonomy/location-contexts/ItemContext" "See more details" _self;
    click ActionContext "/docs/taxonomy/location-contexts/ActionContext" "See more details" _self;
`} caption="Figure: Diagram of ActionContext inheritance" baseColor="blue" />

### Properties
|               | type        | description
| :--           | :--         | :--           
| **text**      | string      | The text of the interactive element or, for visuals, a string describing it.
