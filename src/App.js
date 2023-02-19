import React, { useState } from "react";

import { GlobalStyle } from "./global/style";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./global/theme";
import { themeContext } from "./context/themeContext";
import ProductProvider from "./context/productContext";
import Routers from "./routes";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || lightTheme
  );

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <GlobalStyle />
          <ProductProvider>
            <Routers />
          </ProductProvider>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
