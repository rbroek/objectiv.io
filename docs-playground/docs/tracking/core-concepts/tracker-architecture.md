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

## Browser Tracker
[Browser Tracker](/tracking/api-reference/general/BrowserTracker.md) is organized in three main modules: [Location Trackers](/tracking/api-reference/location-trackers/overview.md), [Event Trackers](/tracking/api-reference/event-trackers/overview.md) and the **Tracked Elements Observer**.

### Location Trackers
[Location Trackers](/tracking/api-reference/location-trackers/overview.md) are decorator functions binding [Location Contexts](/tracking/core-concepts/locations.md) to [Trackable Elements](/tracking/core-concepts/elements.md#trackable-elements) via [TrackingAttributes](/tracking/api-reference/general/TrackingAttributes.md).

### Event Trackers
[Event Trackers](/tracking/api-reference/event-trackers/overview.md) reconstruct [Locations](/tracking/core-concepts/locations.md) before handing [Events](/taxonomy/events/overview.md) over to **Core Tracker**.

### Tracked Elements Observer
Monitors [Tracked Elements](/tracking/core-concepts/elements.md#tracked-elements) and, based on the [TrackingAttributes](/tracking/api-reference/general/TrackingAttributes.md) values, runs the appropriate tasks. 

This includes monitoring the DOM for [Visibility Events](/tracking/core-concepts/visibility.md), binding [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to automatically trigger **Event Trackers** or processing [TrackChildrenQueries](/tracking/api-reference/low-level/trackChildren.md#trackchildrenquery-parameter).
