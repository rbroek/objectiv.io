# DocumentLoadedEvent
A non-interactive event that is emitted after a document finishes loading. It should provide a 
`WebDocumentContext` which describes the state (eg. URL) of the event.

:::note 
With SPA's this probably only happens once, as page (re)loads don't happen after the initial page load.
:::

### Parents
- [NonInteractiveEvent](/docs/taxonomy/events/NonInteractiveEvent).

### Requires
- [WebDocumentContext](/docs/taxonomy/global-contexts/WebDocumentContext).