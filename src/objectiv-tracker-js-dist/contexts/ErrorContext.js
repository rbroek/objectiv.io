export function createErrorContext({ message }) {
    return {
        _context_type: 'ErrorContext',
        message,
    };
}
export function createErrorContextFromError(error) {
    return createErrorContext({ message: error.message });
}
//# sourceMappingURL=ErrorContext.js.map