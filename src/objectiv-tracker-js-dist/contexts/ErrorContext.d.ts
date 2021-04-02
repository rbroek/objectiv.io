export declare type ErrorContext = {
    _context_type: 'ErrorContext';
    message: string;
};
export declare function createErrorContext({ message }: {
    message: string;
}): ErrorContext;
export declare function createErrorContextFromError(error: Error): ErrorContext;
