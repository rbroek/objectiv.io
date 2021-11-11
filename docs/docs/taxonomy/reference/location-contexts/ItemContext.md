# ItemContext

A special [LocationContext](/taxonomy/reference/location-contexts/overview.md) that represents an interactive element of the UI or a target in a system. These elements may trigger both [Interactive](/taxonomy/reference/events/InteractiveEvent) and [Non-Interactive Events](/taxonomy/reference/events/NonInteractiveEvent.md), e.g. an Input field or a Button.




import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
		AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractLocationContext;
    AbstractLocationContext --> ItemContext;
    click AbstractContext "/docs/taxonomy/reference/abstract-contexts/overview#abstractcontext" "See more details" _self;
    click AbstractLocationContext "#abstractlocationcontext" "See more details" _self;
`} caption="Figure: Diagram of InputContext inheritance" baseColor="blue" />


### Properties
None.
