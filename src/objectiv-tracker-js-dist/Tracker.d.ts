import { ResolvableContext } from './ContextResolver';
import { SessionRepositoryInterface } from './session-repository/SessionRepositoryInterface';
import { StackDecorator } from './StackDecorator';
export interface Event {
    event: string;
    contexts: ResolvableContext[];
}
export interface TrackerInterface {
    trackEvent(event: Event): Promise<void>;
    withStack(stack: ResolvableContext[]): TrackerInterface;
}
export declare type TrackerConfiguration = {
    endpoint: string;
    sessionRepository?: SessionRepositoryInterface;
    debug?: boolean;
};
export declare class Tracker implements TrackerInterface {
    private readonly endpoint;
    private readonly contextResolver;
    private readonly sessionRepository;
    private readonly debug;
    constructor(configuration: TrackerConfiguration);
    trackEvent(event: Event): Promise<void>;
    withStack(stack: ResolvableContext[]): any;
    static forWebDocument(configuration: TrackerConfiguration): StackDecorator;
}
