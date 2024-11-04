import { LoadingIndicatorProps } from '../../types';
import { messageStyles } from '../../styles';

export const LoadingIndicator = ({ message = 'Loading resources...' }: LoadingIndicatorProps) => (
  <div style={messageStyles.loading.container}>
    {message}
  </div>
); 