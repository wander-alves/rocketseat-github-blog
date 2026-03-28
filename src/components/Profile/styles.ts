import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  display: flex;
  gap: 3.2rem;
  width: 100%;
  max-width: 86.4rem;
  padding: 3.2rem;
  border-radius: 10px;

  > img {
    height: 14.8rem;
    width: 14.8rem;
    border-radius: 8px;
  }
`;

export const ProfileInfoContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & > div > p {
    font: ${({ theme }) => theme['font-text-m']};
  }
`;

export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.8rem;

  > strong {
    font: ${({ theme }) => theme['font-title-l']};
    color: ${({ theme }) => theme['base-title']};
  }

  > a {
    height: 2rem;

    font: ${({ theme }) => theme['font-component-link']};
    color: ${({ theme }) => theme['brand-blue']};

    text-decoration: none;

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
  }
`;

export const ProfileItemsList = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const ProfileItem =styled.span`
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
`
