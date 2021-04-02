export function createWebDocumentContext({ id }) {
    return {
        _context_type: 'WebDocumentContext',
        id,
    };
}
export function createWebDocumentContextFromDocument(document) {
    return createWebDocumentContext({ id: document.location.href });
}
//# sourceMappingURL=WebDocumentContext.js.map