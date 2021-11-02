import { func, object, optional } from 'superstruct';
import { AnyLocationContext } from './LocationContext';
import { TagLocationOptions } from './TagLocationOptions';
import { TrackerErrorHandlerCallback } from './TrackerErrorHandlerCallback';

/**
 * The parameters of `tagLocation` and its shorthands
 */
export const TagLocationParameters = object({
  instance: AnyLocationContext,
  options: optional(TagLocationOptions),
  onError: optional(func()),
});

export type TagLocationParameters = {
  instance: AnyLocationContext;
  options?: TagLocationOptions;
  onError?: TrackerErrorHandlerCallback;
};
