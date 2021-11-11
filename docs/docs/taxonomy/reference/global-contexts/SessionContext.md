# SessionContext

A [GlobalContext](/taxonomy/reference/global-contexts/overview.md) describing meta information about the current session.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> SessionContext["SessionContext<br><span class='properties'>hit_number: integer</span>"];
    click AbstractContext "/docs/taxonomy/reference/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/reference/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of SessionContext inheritance" baseColor="blue" />

### Properties
|                 | type      | description
| :--             | :--       | :--           
| **hit_number**  | integer   | Hit counter relative to the current session, this event originated in.
