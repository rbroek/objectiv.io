import { v4 as uuid } from 'uuid';
export class LocalStorageSessionRepository {
    constructor(prefix = 'objectiv') {
        this.prefix = prefix;
    }
    async getSessionId() {
        return localStorage.getItem(`${this.prefix}-session-id`);
    }
    async storeSessionId(sessionId) {
        localStorage.setItem(`${this.prefix}-session-id`, sessionId);
    }
    async getOrCreateSessionId() {
        let sessionId = await this.getSessionId();
        if (!sessionId) {
            sessionId = uuid();
            await this.storeSessionId(sessionId);
        }
        return sessionId;
    }
}
//# sourceMappingURL=LocalStorageSessionRepository.js.map