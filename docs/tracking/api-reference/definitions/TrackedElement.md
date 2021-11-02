import { TaggableElement } from '@objectiv/tracker-browser';

/**
 * A TrackedElement is either a TaggedElement or an EventTarget
 */
export type TrackedElement = TaggableElement | EventTarget;
