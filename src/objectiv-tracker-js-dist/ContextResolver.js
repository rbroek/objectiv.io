import { createErrorContextFromError } from './contexts';
import { addTimeoutToPromise } from './addTimeoutToPromise';
function isPromise(context) {
    return typeof context['then'] !== 'undefined';
}
export class ContextResolver {
    constructor(promiseTimeout) {
        this.promiseTimeout = promiseTimeout;
    }
    async resolve(contexts) {
        const resolvedPromises = await Promise.all(contexts.map((resolvable) => {
            if (!isPromise(resolvable)) {
                return resolvable;
            }
            return addTimeoutToPromise(resolvable, this.promiseTimeout).catch((error) => createErrorContextFromError(error));
        }));
        const resolvedFactories = resolvedPromises.map((resolvable) => {
            if (typeof resolvable !== 'function') {
                return resolvable;
            }
            try {
                return resolvable();
            }
            catch (error) {
                return createErrorContextFromError(error);
            }
        });
        return resolvedFactories;
    }
}
//# sourceMappingURL=ContextResolver.js.map