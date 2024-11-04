import { jsx as _jsx } from "react/jsx-runtime";
import { messageStyles } from '../../styles';
export const ErrorMessage = ({ message }) => (_jsx("div", { style: messageStyles.error.text, children: message }));
