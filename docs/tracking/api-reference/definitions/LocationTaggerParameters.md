import { assign, object, pick, string } from 'superstruct';
import { TagLocationOptions } from './TagLocationOptions';
import { TagLocationParameters } from './TagLocationParameters';
import { TrackerErrorHandlerCallback } from './TrackerErrorHandlerCallback';

/**
 * LocationTaggers are shorthands around tagLocation.
 */
export const LocationTaggerParameters = assign(
  pick(TagLocationParameters, ['options', 'onError']),
  object({
    id: string(),
  })
);

export type LocationTaggerParameters = {
  id: string;
  options?: TagLocationOptions;
  onError?: TrackerErrorHandlerCallback;
};
