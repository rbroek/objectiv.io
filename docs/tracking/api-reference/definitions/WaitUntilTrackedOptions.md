import { Infer, number, object, optional } from 'superstruct';
import { FlushQueueOptions } from './FlushQueueOptions';

/**
 * WaitUntilTracked Options for TrackClick TaggingAttribute
 */
export const WaitUntilTrackedOptions = object({
  intervalMs: optional(number()),
  timeoutMs: optional(number()),
  flushQueue: optional(FlushQueueOptions),
});
export type WaitUntilTrackedOptions = Infer<typeof WaitUntilTrackedOptions>;
