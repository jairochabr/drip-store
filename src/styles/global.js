import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }

  body, button, input, textarea {
    font: 400 1.6rem ${({ theme }) => theme.font.family};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  a, img, span {
    display: inline-block;
  }

  img {
  max-width: 100%;
  height: auto;
}
`;
