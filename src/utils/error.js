export const createError = (message, originalError) => {
    const error = originalError instanceof Error ? originalError : new Error(message);
    const context = {
        message,
        context: 'general',
        timestamp: Date.now()
    };
    return Object.assign(error, { context });
};
export const logError = (error, context) => {
    console.error(`[${context}] ${new Date().toISOString()}:`, error);
    if ('context' in error) {
        console.debug('Error context:', error.context);
    }
};
export const isErrorWithContext = (error) => {
    return error instanceof Error && 'context' in error;
};
