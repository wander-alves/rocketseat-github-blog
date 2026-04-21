import styled from "styled-components";

export const StatsItemContainer =styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  text-decoration: none;

  font: ${({ theme }) => theme['font-text-m']};

  > img {
    height: 1.8rem;
    width: 1.8rem;
  }
`;
