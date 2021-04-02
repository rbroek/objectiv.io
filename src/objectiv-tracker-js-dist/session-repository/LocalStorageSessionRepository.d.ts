import { SessionRepositoryInterface } from './SessionRepositoryInterface';
export declare class LocalStorageSessionRepository implements SessionRepositoryInterface {
    private readonly prefix;
    constructor(prefix?: string);
    getSessionId(): Promise<string>;
    storeSessionId(sessionId: string): Promise<void>;
    getOrCreateSessionId(): Promise<string>;
}
