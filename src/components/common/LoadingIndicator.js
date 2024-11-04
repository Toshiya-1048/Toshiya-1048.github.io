import { jsx as _jsx } from "react/jsx-runtime";
import { messageStyles } from '../../styles';
export const LoadingIndicator = ({ message = 'Loading resources...' }) => (_jsx("div", { style: messageStyles.loading.container, children: message }));
