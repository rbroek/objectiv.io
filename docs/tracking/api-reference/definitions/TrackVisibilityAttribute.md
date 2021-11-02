import { boolean, Infer, literal, object, union } from 'superstruct';

/**
 * The definition of the `trackVisibility` Tagging Attribute
 */
export const TrackVisibilityAttribute = union([
  object({ mode: literal('auto') }),
  object({ mode: literal('manual'), isVisible: boolean() }),
]);

export type TrackVisibilityAttribute = Infer<typeof TrackVisibilityAttribute>;
