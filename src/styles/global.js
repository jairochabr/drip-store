import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  :focus-visible {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
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

  body::-webkit-scrollbar {
    width: 1.6rem;
  }

  body::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray3};
    border-radius: 8px;
  }

  body::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border: 4px solid ${({ theme }) => theme.colors.lightGray3};
    border-radius: 8px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;
