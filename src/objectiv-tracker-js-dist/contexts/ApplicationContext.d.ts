export declare type ApplicationContext = {
    _context_type: 'ApplicationContext';
    id: string;
    version: string;
};
export declare function createApplicationContext({ id, version }: {
    id: string;
    version: string;
}): ApplicationContext;
