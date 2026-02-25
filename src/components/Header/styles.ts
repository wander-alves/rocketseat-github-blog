import styled from 'styled-components';

import bgImg from '../../assets/cover.png';

export const HeaderContainer = styled.header`
  min-height: 29.6rem;
  padding-block: 6.4rem;
  margin: 0 auto;

  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;
`;
