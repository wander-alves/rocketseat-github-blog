import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  margin-top: 7.2rem;
  width: 100%;
  max-width: 86.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & > input {
    padding: 1.6rem 1.2rem;
    width: 100%;
    font: ${({ theme }) => theme['font-text-m']};
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }

    &:focus-within {
      outline: transparent;
      border: 1px solid ${({ theme }) => theme['brand-blue']};
    }
  }
`;

export const SearchFormTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > strong {
    font: ${({ theme }) => theme['font-title-s']};
    color: ${({ theme }) => theme['base-subtitle']};
  }

  & > span {
    font: ${({ theme }) => theme['font-text-s']};
    color: ${({ theme }) => theme['base-span']};
  }
`;
