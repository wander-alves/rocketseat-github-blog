import type { LinkProps } from 'react-router-dom'
import { LinkContainer } from './styles';

export function Link({ children, ...props }: LinkProps) {
  return (
    <LinkContainer {...props}>
      {children}
    </LinkContainer>
  );
}
