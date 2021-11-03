# CookieIdContext

A [GlobalContext](/docs/taxonomy/global-contexts) carrying the information needed to reconstruct a user session.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> CookieIdContext["CookieIdContext<br><span class='properties'>cookie_id: string</span>"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of CookieIdContext inheritance" baseColor="blue" />

### Properties
|                | type        | description
| :--            | :--         | :--           
| **cookie_id**  | string      | Unique identifier from the session cookie.
