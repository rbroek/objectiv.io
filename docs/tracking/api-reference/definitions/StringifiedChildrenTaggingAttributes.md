import { Infer, object, string } from 'superstruct';
import { TaggingAttribute } from './TaggingAttribute';

/**
 * The stringified version of the `ChildrenLocationTaggingAttributes`
 */
export const StringifiedChildrenLocationTaggingAttributes = object({
  [TaggingAttribute.tagChildren]: string(),
});

export type StringifiedChildrenLocationTaggingAttributes = Infer<typeof StringifiedChildrenLocationTaggingAttributes>;
