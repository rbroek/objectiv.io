import { Tracker } from "objectiv-tracker-js";
import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Only load the tracker if the environment can execute DOM, so it doesn't break SSR when building.
// Also see https://github.com/facebook/docusaurus/issues/2494.
const docsSectionTracker = null;
if (ExecutionEnvironment.canUseDOM) {
  // Create a new Tracker
  const tracker = Tracker.forWebDocument({
    // TODO make the endpoint optional in debug mode
    endpoint: `https://httpstat.us/200`,
    debug: true
  });

  // Extend the basic tracker with a default Section representing the Docs
  docsSectionTracker = tracker.withStack([
    {
      _context_type: 'SectionContext',
      id: "Docs",
    },
  ]);
}

// Add react-live imports you need here
const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      backgroundColor: 'white',
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

const ReactLiveScope = {
  React,
  ...React,
  docsSectionTracker,
  ButtonExample,
};

export default ReactLiveScope;
