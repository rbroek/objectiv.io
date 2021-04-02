export class StackDecorator {
    constructor(tracker, stack) {
        this.tracker = tracker;
        this.stack = stack;
    }
    async trackEvent(event) {
        await this.tracker.trackEvent(Object.assign(Object.assign({}, event), { contexts: [...event.contexts, ...this.stack] }));
    }
    withStack(stack) {
        return new StackDecorator(this, stack);
    }
}
//# sourceMappingURL=StackDecorator.js.map