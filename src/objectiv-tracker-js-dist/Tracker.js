import { ContextResolver } from './ContextResolver';
import { createWebDocumentContextFromDocument } from './contexts';
import { documentLoaded } from './documentLoaded';
import { LocalStorageSessionRepository } from './session-repository/LocalStorageSessionRepository';
import { StackDecorator } from './StackDecorator';
const CONTEXT_RESOLVE_TIMEOUT = 5000;
export class Tracker {
    constructor(configuration) {
        var _a, _b;
        this.endpoint = configuration.endpoint;
        this.sessionRepository = (_a = configuration.sessionRepository) !== null && _a !== void 0 ? _a : new LocalStorageSessionRepository();
        this.contextResolver = new ContextResolver(CONTEXT_RESOLVE_TIMEOUT);
        this.debug = (_b = configuration.debug) !== null && _b !== void 0 ? _b : false;
    }
    async trackEvent(event) {
        const resolvedEvent = Object.assign(Object.assign({}, event), { contexts: await this.contextResolver.resolve(event.contexts) });
        if (this.debug) {
            console.log('Tracking event', resolvedEvent);
        }
        await fetch(this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Session-Id': await this.sessionRepository.getOrCreateSessionId(),
            },
            body: JSON.stringify([resolvedEvent]),
            // set cookies in cross-origin requests too (e.g. a request to a different port number)
            credentials: "include"
        });
    }
    withStack(stack) {
        return new StackDecorator(this, stack);
    }
    static forWebDocument(configuration) {
        const tracker = new StackDecorator(new Tracker(configuration), [
            () => createWebDocumentContextFromDocument(window.document),
        ]);
        documentLoaded().then(() => {
            tracker.trackEvent({
                event: 'DocumentLoadedEvent',
                contexts: [],
            });
        });
        return tracker;
    }
}
//# sourceMappingURL=Tracker.js.map