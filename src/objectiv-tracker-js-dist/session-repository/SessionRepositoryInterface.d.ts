export interface SessionRepositoryInterface {
    getSessionId(): Promise<string>;
    storeSessionId(sessionId: string): Promise<void>;
    getOrCreateSessionId(): Promise<string>;
}
