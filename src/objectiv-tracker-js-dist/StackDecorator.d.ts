import { ResolvableContext } from './ContextResolver';
import { Event, TrackerInterface } from './Tracker';
export declare class StackDecorator implements TrackerInterface {
    private readonly tracker;
    private readonly stack;
    constructor(tracker: TrackerInterface, stack: ResolvableContext[]);
    trackEvent(event: Event): Promise<void>;
    withStack(stack: ResolvableContext[]): any;
}
