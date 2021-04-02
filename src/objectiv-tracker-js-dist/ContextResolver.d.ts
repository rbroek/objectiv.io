import { Context } from './contexts';
export declare type ResolvableContext = Context | Promise<Context> | (() => Context);
export declare class ContextResolver {
    private readonly promiseTimeout;
    constructor(promiseTimeout: number);
    resolve(contexts: ResolvableContext[]): Promise<Context[]>;
}
