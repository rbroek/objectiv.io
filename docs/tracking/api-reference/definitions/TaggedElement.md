import { StringifiedLocationTaggingAttributes } from './StringifiedLocationTaggingAttributes';
import { TaggableElement } from './TaggableElement';

/**
 * A TaggedElement is a TaggableElement already decorated with our LocationTaggingAttributes
 */
export type TaggedElement = TaggableElement & StringifiedLocationTaggingAttributes;
