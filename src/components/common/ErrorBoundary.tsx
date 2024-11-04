import React, { Component } from 'react';
import { ErrorBoundaryProps, ErrorState } from '../../types';
import { messageStyles } from '../../styles';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div style={messageStyles.error.container}>
          <h2>予期せぬエラーが発生しました。</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;