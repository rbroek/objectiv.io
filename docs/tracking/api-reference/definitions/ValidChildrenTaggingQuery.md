import { Infer, object, string } from 'superstruct';
import { StringifiedLocationTaggingAttributes } from './StringifiedLocationTaggingAttributes';

/**
 * The parameters of `tagChild` where `tagAs` is a valid StringifiedLocationTaggingAttributes
 */
export const ValidChildrenTaggingQuery = object({
  queryAll: string(),
  tagAs: StringifiedLocationTaggingAttributes,
});
export type ValidChildrenTaggingQuery = Infer<typeof ValidChildrenTaggingQuery>;
