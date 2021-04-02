import { SessionRepositoryInterface } from './SessionRepositoryInterface';
export declare class MemorySessionRepository implements SessionRepositoryInterface {
    private sessionId;
    getSessionId(): Promise<string>;
    storeSessionId(sessionId: string): Promise<void>;
    getOrCreateSessionId(): Promise<string>;
}
