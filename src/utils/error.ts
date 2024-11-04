import { ErrorWithContext, ErrorContext } from '../types';

export const createError = (message: string, originalError?: unknown): ErrorWithContext => {
  const error = originalError instanceof Error ? originalError : new Error(message);
  const context: ErrorContext = {
    message,
    context: 'general',
    timestamp: Date.now()
  };
  
  return Object.assign(error, { context });
};

export const logError = (error: Error, context: string): void => {
  console.error(`[${context}] ${new Date().toISOString()}:`, error);
  
  if ('context' in error) {
    console.debug('Error context:', (error as ErrorWithContext).context);
  }
};

export const isErrorWithContext = (error: unknown): error is ErrorWithContext => {
  return error instanceof Error && 'context' in error;
};