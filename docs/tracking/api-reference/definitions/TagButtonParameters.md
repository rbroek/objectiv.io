import { assign, object, string } from 'superstruct';
import { LocationTaggerParameters } from './LocationTaggerParameters';

/**
 * tagButton has an extra attribute, `text`, as mandatory parameter.
 */
export const TagButtonParameters = assign(LocationTaggerParameters, object({ text: string() }));
export type TagButtonParameters = LocationTaggerParameters & { text: string };
