import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family:  ${({ theme }) => theme.font.body};
    font-size: 16px;
  }
`;