import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { messageStyles } from '../../styles';
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError && this.state.error) {
            return (_jsxs("div", { style: messageStyles.error.container, children: [_jsx("h2", { children: "\u4E88\u671F\u305B\u306C\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002" }), _jsx("p", { children: this.state.error.message })] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
