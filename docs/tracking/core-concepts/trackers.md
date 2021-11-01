---
sidebar_position: 5
title: Trackers
slug: trackers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv currently supports three trackers:
* [Browser Tracker](#browser-tracker) for installation into websites and JS web apps via npm.
* [React Tracker](#react-tracker) for installation into React web apps.
* [Angular Tracker](#angular-tracker) for installation into Angular web apps.

## Browser Tracker
The [Browser Tracker](/tracking/api-reference/globals/BrowserTracker.md) is available via npm. It supports 
core tracking methods out of the box.

Example usage:
```js
Example code
```

TODO: Support for auto-tracking (Application loaded, URL change)

## React Tracker
The React Tracker is available via npm to be directly installed into your React application. It supports all 
core tracking methods out of the box, and provides added shorthands for React components.

Example usage:
```js
<Button {...tagButton({ id: 'button-2', text: "Do It!" })}>Do It!</Button>
```

See the [How-to Guide for React](/tracking/how-to-guides/react/getting-started.md) to get started.

By default, the React Tracker automatically tracks 
[ApplicationLoaded](/tracking/api-reference/event-trackers/trackApplicationLoaded.md) and 
[URLChange](/tracking/api-reference/event-trackers/trackURLChange.md) events.

## Angular Tracker
The React Tracker is available via npm to be directly installed into your React application. It supports all 
core tracking methods out of the box, and provides added shorthands for Angular components.

Example usage:
```js
// a button tag 
<button [tagButton]="{ id: 'button-1', text: 'Click Me!' }">Click Me!</button>
```

See the [How-to Guide for Angular](/tracking/how-to-guides/angular/getting-started.md) to get started.

By default, the Angular Tracker automatically tracks 
[ApplicationLoaded](/tracking/api-reference/event-trackers/trackApplicationLoaded.md) and 
[URLChange](/tracking/api-reference/event-trackers/trackURLChange.md) events.

## Extensibility: Plugins
The Core Tracker is extensible through plugins. Each plugin can control when it's enabled, e.g. only if a Web
environment is available.

Three plugins are supported out of the box, and automatically enabled when the environment supports them:
* `application-context`: adds a Global [ApplicationContext](/taxonomy/global-contexts/ApplicationContext.md) 
  to each Event;
* `web-device-context`: adds a Global [DeviceContext](/taxonomy/global-contexts/DeviceContext.md) to each 
  Event;
* `web-document-context`: adds a [Location](/tracking/core-concepts/locations.md) 
  [WebDocumentContext](/taxonomy/location-contexts/WebDocumentContext.md) to each Event;

## Tracker Architecture

<img alt="Tracker Architecture" src={useBaseUrl('img/tracker-architecture.svg')} />

[placeholder]

### Core Tracker
[placeholder]

#### Plugins
[placeholder]

#### Transport
[placeholder]

#### TrackerConsole
[placeholder]

### Browser Tracker
[Browser Tracker](/tracking/api-reference/globals/BrowserTracker.md) is organized in three main modules: [Location Taggers](/tracking/api-reference/location-taggers/overview.md), [Event Trackers](/tracking/api-reference/event-trackers/overview.md) and the **Tagged Elements Observer**.

#### Location Taggers
[Location Taggers](/tracking/api-reference/location-taggers/overview.md) are decorator functions binding [Location Contexts](/taxonomy/location-contexts/overview.md) to [Taggable Elements](/tracking/core-concepts/tagging.md#taggable-elements) via [TaggingAttributes](/tracking/api-reference/globals/TaggingAttributes.md).

#### Event Trackers
[Event Trackers](/tracking/api-reference/event-trackers/overview.md) reconstruct [Locations](/tracking/core-concepts/locations.md) before handing [Events](/taxonomy/events/overview.md) over to **Core Tracker**.

#### Tagged Elements Observer
Monitors [Tagged Elements](/tracking/core-concepts/tagging.md#tagged-elements) and, based on the [TaggingAttributes](/tracking/api-reference/globals/TaggingAttributes.md) values, runs the appropriate tasks. 

This includes monitoring the DOM for Visibility Events, binding [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to automatically trigger **Event Trackers** or processing [ChildrenTaggingQueries](/tracking/api-reference/low-level/tagChildren.md#childrentaggingquery-parameter).
