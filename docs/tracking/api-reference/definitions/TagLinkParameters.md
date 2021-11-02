import { assign, object, string } from 'superstruct';
import { LocationTaggerParameters } from './LocationTaggerParameters';

/**
 * tagLink has two extra attributes, `text` and `href`, as mandatory parameters.
 */
export const TagLinkParameters = assign(LocationTaggerParameters, object({ text: string(), href: string() }));
export type TagLinkParameters = LocationTaggerParameters & { text: string; href: string };
