import { GlobalContexts, LocationStack } from '@objectiv/tracker-core';
import { BrowserTracker } from '../BrowserTracker';
import { TaggableElement } from './TaggableElement';
import { TrackerErrorHandlerCallback } from './TrackerErrorHandlerCallback';

/**
 * The parameters of the Event Tracker shorthand functions
 */
export type InteractiveEventTrackerParameters = {
  element: TaggableElement | EventTarget;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
};
