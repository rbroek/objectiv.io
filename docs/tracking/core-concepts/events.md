---
sidebar_position: 3
title: Events
slug: events
---

Events collect data about relevant occurrences in your application. They are either triggered directly when a 
user interacts with your application (an [InteractiveEvent](/taxonomy/events/InteractiveEvent.md)), or 
automatically, e.g. when a form callback or payments completes at a later time (a 
[NonInteractiveEvent](/taxonomy/events/NonInteractiveEvent.md)).

### Properties
Next to specifying its `_type`, [Events](/taxonomy/events/overview.md) must provide a unique `id`. Together 
with its [Location](/tracking/core-concepts/locations.md) Stack, every Event in an application should be unique - Trackers 
[help to enforce this](validation.md).

Additionally, every Event must have [GlobalContexts](taxonomy/global-contexts/overview.md), with at least an 
[`ApplicationContext`](/taxonomy/global-contexts/ApplicationContext.md), to be able to distinguish from what application the event originated.

Every Event optionally can, but most likely will, carry a list of 
[LocationContexts](taxonomy/location-contexts/overview.md) that describe where the event happened

An example event with `location_stack` and `global_context` properties:

```json
{
  "_type":"ClickEvent",
  "id":"211d778b-20ea-4a12-be56-77d5b8fe3cd0"
  "location_stack":[
    {
      "_type":"WebDocumentContext",
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
      "href":"/path"
    }
  ],
  "global_contexts":[
    {
      "_type":"ApplicationContext",
      "id":"example-website"
    },
    {
      "_type":"DeviceContext",
      "id":"device",
      "user_agent":"Mozilla/5.0"
    }
  ],
}
```

## Triggers
For tagged Elements, their Events are 
[triggered automatically](/tracking/api-reference/low-level/tagLocation.md#events), based on the 
LocationContext bound to the Tagged Element.

Internally, the Web tracker uses a Mutation Observer to monitor the DOM. When existing nodes change or get 
removed, or if subtrees get added, it traverses the Nodes and scouts for Elements that have been enriched 
with Tracking Attributes. For those Elements it attaches Event listeners, which will automatically handle 
their tracking.

## Automatic Event Triggers
The Tracker uses the same Observer described above to trigger the events below.

### ApplicationLoaded
An [ApplicationLoaded](/taxonomy/events/ApplicationLoadedEvent.md) Event (by default enabled, configurable)
triggers once on application load.

### URLChange
An [URLChange](/taxonomy/events/URLChangeEvent.md) Event (by default enabled, configurable) triggers on SPA 
URL changes, by keeping track of the last URL detected.

### Visibility
[SectionHidden](/taxonomy/events/SectionHiddenEvent.md) and 
[SectionVisible](/taxonomy/events/SectionVisibleEvent.md) Events (by default enabled, configurable) trigger 
on Sections that render hidden or visible, respectively. 

To do so, the tracker observes elements with the `trackVisibility` attribute set to `auto`:
* When it detects a change in the visibility of such a tagged element, it triggers the corresponding 
  visibility events. 
* When such a node is removed, it will trigger a [SectionVisible](/taxonomy/events/SectionVisibleEvent.md) 
  Event for it.

Alternatively, it triggers the corresponding Events when an Element has its visibility manually set to 
visible or not visible.

## Manual Event Triggers
Sometimes it may be preferable, or necessary, to 
[trigger Events programmatically](/tracking/api-reference/event-trackers/overview.md).
