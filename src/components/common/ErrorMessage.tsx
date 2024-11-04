import { ErrorMessageProps } from '../../types';
import { messageStyles } from '../../styles';

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div style={messageStyles.error.text}>
    {message}
  </div>
); 