import React from 'react';
import {Tracker} from '../../objectiv-tracker-js-dist';
import { ObjectivProvider } from '../../tracker/ObjectivProvider';
const tracker = Tracker.forWebDocument({ endpoint: `http://${window.location.hostname}:5000/`, debug: true });

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
  ButtonExample,
  Tracker,
  tracker,
  ObjectivProvider,
};

export default ReactLiveScope;
