---
sidebar_position: 3
---

# Tracker Architecture
[placeholder]

## Core Tracker
[placeholder]

### Plugins
[placeholder]

### Transport
[placeholder]

### TrackerConsole
[placeholder]

## Browser Tracker
[Browser Tracker](/tracking/api-reference/general/BrowserTracker.md) is organized in three main modules: [Location Taggers](/tracking/api-reference/location-taggers/overview.md), [Event Trackers](/tracking/api-reference/event-trackers/overview.md) and the **Tagged Elements Observer**.

### Location Taggers
[Location Taggers](/tracking/api-reference/location-taggers/overview.md) are decorator functions binding [Location Contexts](/tracking/core-concepts/locations.md) to [Taggable Elements](/tracking/core-concepts/elements.md#taggable-elements) via [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md).

### Event Trackers
[Event Trackers](/tracking/api-reference/event-trackers/overview.md) reconstruct [Locations](/tracking/core-concepts/locations.md) before handing [Events](/taxonomy/events/overview.md) over to **Core Tracker**.

### Tagged Elements Observer
Monitors [Tagged Elements](/tracking/core-concepts/elements.md#tagged-elements) and, based on the [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md) values, runs the appropriate tasks. 

This includes monitoring the DOM for [Visibility Events](/tracking/core-concepts/visibility.md), binding [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to automatically trigger **Event Trackers** or processing [ChildrenTaggingQueries](/tracking/api-reference/low-level/tagChildren.md#childrentaggingquery-parameter).
