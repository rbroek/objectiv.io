import { v4 as uuid } from 'uuid';
export class MemorySessionRepository {
    async getSessionId() {
        return this.sessionId;
    }
    async storeSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    async getOrCreateSessionId() {
        if (!this.sessionId) {
            this.sessionId = uuid();
        }
        return this.sessionId;
    }
}
//# sourceMappingURL=MemorySessionRepository.js.map