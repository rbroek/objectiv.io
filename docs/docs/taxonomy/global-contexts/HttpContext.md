# HttpContext

A [GlobalContext](/taxonomy/global-contexts/overview.md) describing meta information about the agent that sent the event.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
    AbstractGlobalContext --> HttpContext["HttpContext<br><span class='properties'>referer: string<br>user_agent: string<br>remote_address: string</span>"];
    click AbstractContext "/docs/taxonomy/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractGlobalContext "/docs/taxonomy/abstract-contexts/AbstractGlobalContext" "See more details" _self;
`} caption="Figure: Diagram of HttpContext inheritance" baseColor="blue" />

### Properties
|                     | type            | description
| :--                 | :--             | :--           
| **referer**         | string          | Full URL to HTTP referrer of the current page.
| **user_agent**      | string          | User-agent of the agent that sent the event.
| **remote_address**  | string          | (public) IP address of the agent that sent the event.
