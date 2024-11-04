// エラー関連の型定義
export interface ErrorState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorContext {
  message: string;
  context: string;
  timestamp: number;
}

export type ErrorWithContext = Error & {
  context?: ErrorContext;
}; 