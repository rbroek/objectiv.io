---
sidebar_position: 5
title: Visibility
slug: visibility
---

There are several [use cases](#use-cases) in which you want to track whether an Element is shown or hidden to 
a user. We define this as **Visibility**.

Tracking the **Visibility** of Elements is non-trivial. Frameworks like React can succesfully render Elements, 
adding them to the DOM, that are actually not visible to the user. Visibility of Elements can also be 
controlled in a myriad of other ways, e.g. via CSS properties like `display: none`.

Thus, visibility in the DOM does not always mean visibility in the UI, making it hard to track automatically. 
Objectiv therefore allows you to manually specify whether and how an Element triggers Visibility Events.

## Visibility Events
Objectiv supports two Events for Elements that become visible or hidden:
* [SectionHiddenEvent](/taxonomy/events/SectionHiddenEvent.md); and
* [SectionVisibleEvent](/taxonomy/events/SectionVisibleEvent.md).

## How To Use
You can manually specify whether and how an Element triggers Visibility Events, via:
* [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md): For a given TrackableElement, 
  defines a state that triggers Visibility Events.
* [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md): Immediately trigger a
  SectionVisible Event for the given TrackableElement.
* [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md): Immediately trigger a
  SectionHidden Event for the given TrackableElement.

## Use Cases
Below some example use cases in which you may want to use Visibility Events.

### Async Loading
Certain Elements in a UI may be loaded asychronously, e.g. a list of videos pulled from the YouTube API. 

In such cases, you cannot know which Elements were on screen at analysis-time. Tracking which ones were 
loaded through Visibility Events helps you understand for instance:
* Their Click-Through Rate (CTR); or
* Their impact on user behavior.

### Overlays and Tooltips
Some Elements may only be shown on screen when a user interacts with them, which then overlay the current UI.
Examples are tooltips and notification menus. 

A [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md) method is available for these cases.

### Expandable Elements
When an Element shows in the current UI only on interaction (but does not overlay it), we define these as 
[ExpandableSections](/taxonomy/location-contexts/ExpandableSectionContext.md).

A [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md) method is 
available for these cases.