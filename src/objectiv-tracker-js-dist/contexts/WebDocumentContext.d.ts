export declare type WebDocumentContext = {
    _context_type: 'WebDocumentContext';
    id: string;
};
export declare function createWebDocumentContext({ id }: {
    id: string;
}): WebDocumentContext;
export declare function createWebDocumentContextFromDocument(document: Document): WebDocumentContext;
