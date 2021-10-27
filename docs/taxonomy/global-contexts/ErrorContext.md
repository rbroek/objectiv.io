# ErrorContext

Global Context to encapsulate any errors.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> ErrorContext["ErrorContext<br><span class='properties'>message: string</span>"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of ErrorContext inheritance" baseColor="blue" />

### Properties
|              | type        | description
| :--          | :--         | :--           
| **message**  | string      | Error message.
