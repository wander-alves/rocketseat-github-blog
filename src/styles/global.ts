import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{ 
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    color: ${({ theme }) => theme['base-text']};
    
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;
  }

  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme['base-background']};
  }
`;
