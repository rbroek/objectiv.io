import { Infer, optional } from 'superstruct';
import { StringifiedChildrenLocationTaggingAttributes } from './StringifiedChildrenTaggingAttribute';

/**
 * The definition of the object returned by `tagChildren` and `tagChild`
 */
export const TagChildrenReturnValue = optional(StringifiedChildrenLocationTaggingAttributes);

export type TagChildrenReturnValue = Infer<typeof TagChildrenReturnValue>;
