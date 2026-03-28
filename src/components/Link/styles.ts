import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkContainer = styled(Link)`
  height: 2rem;

  font: ${({ theme }) => theme['font-component-link']};
  color: ${({ theme }) => theme['brand-blue']};

  text-decoration: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;

  gap: 0.8rem;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme['brand-blue']};
  }

  > img {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
