import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


import { ThemeProvider } from "styled-components";
import { themeContext } from "./context/themeContext";
import { lightTheme } from "./global/theme";
import { GlobalStyle } from "./global/style";
import { Home } from "./pages/Home";
import Signin from './pages/Signin/index';
import Signup from './pages/Signup/index';
import Alibaba from "./pages/Alibaba";
import TechStoreList from './pages/TechStorelist/index';
import Electronic from './pages/Electronic/index';
import ProductDetails from './pages/ProductDetails/index';
import Cart from "./pages/BasicCart";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || lightTheme
  );

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={[theme, setTheme]}>
        <div className="App">
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/alibaba" element={<Alibaba />} />
            <Route path="/techstorelist" element={<TechStoreList />} />
            <Route path="/electronic" element={<Electronic />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/cartpage" element={<Cart />} />
          </Routes>
        </div>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
