import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartProvider } from "./contexts/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
