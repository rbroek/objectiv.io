import { StringifiedChildrenLocationTaggingAttributes } from './StringifiedChildrenTaggingAttribute';
import { TaggableElement } from './TaggableElement';

/**
 * A TagChildrenElement is a TaggableElement already decorated with our ChildrenLocationTaggingAttributes
 */
export type TagChildrenElement = TaggableElement & StringifiedChildrenLocationTaggingAttributes;
