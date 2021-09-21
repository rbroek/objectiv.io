---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Getting Started - React

[placeholder]

## Install Tracker from NPM

```bash
yarn add @objectiv/tracker-browser

# or 

npm install @objectiv/tracker-browser
```

## Configure the Tracker

The fastest way to configure a global instance for all Trackers to use is to import and call [configureTracker](/tracking/api-reference/general/configureTracker.md).

```typescript
import { configureTracker } from "@objectiv/tracker-browser";
```

Ideally, the tracker should be configured as early as possible. Best if before the Application renders or as high up as possible in the component tree.

### Before the Application renders
Here is how that can be achieved in the `index` of the Application, right before rendering the App.

```typescript
configureTracker({
  applicationId: 'app-id',
  endpoint: 'https://collector.application.dev'
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

### In a root-like Component
No `index` access? Any high-up enough component will do as well. Think of an `App` or equivalent component.

In such cases it's a good idea to stabilize `configureTracker` by wrapping it in a [useEffect](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) without dependencies. This will ensure it will be unaffected by re-renders.

```typescript
const App = () => {
  …
  useEffect(
    () => {
      configureTracker({
        applicationId: 'app-id',
        endpoint: 'https://collector.application.dev'
      });
    },
    [] // no dependencies => no side effects on re-render
  )
  …
}
```

:::info
Executing `configureTracker` multiple times is not an issue from a tracking point of view. It's simply not efficient.
:::

## Done
The tracker should now be running and auto-tracking some Events already, such as ApplicationLoaded and URLChange.

Time to start [Tracking Locations](/tracking/how-to-guides/tracking-locations.mdx)!
