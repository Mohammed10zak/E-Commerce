import React, { lazy, Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeContext } from "./context/themeContext";
import { lightTheme } from "./global/theme";
import { GlobalStyle } from "./global/style";
import { useAuthContext } from "./context/AuthContext";
import ProductProvider from "./context/productContext";

const Signin = lazy(() => import("./pages/Signin/index"));
const Signup = lazy(() => import("./pages/Signup/index"));
const Alibaba = lazy(() => import("./pages/Alibaba"));
const TechStoreList = lazy(() => import("./pages/TechStorelist/index"));
const Electronic = lazy(() => import("./pages/Electronic/index"));
const ProductDetails = lazy(() => import("./pages/ProductDetails/index"));
const Cart = lazy(() => import("./pages/BasicCart"));

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || lightTheme
  );

  const { authorized, setAuthorized, setToken } = useAuthContext();

  const token = localStorage.getItem("token");
  if (token) {
    setToken(token);
    setAuthorized(true);
  }

  return (
    <ThemeProvider theme={theme}>

      <themeContext.Provider value={[theme, setTheme]}>
        <div className="App">
          <GlobalStyle />
          <Suspense fallback={<div>Loading...</div>}>
            <ProductProvider>
            <Routes>
              <Route index element={<Navigate to="/signin" />} />
              <Route
                path="/signin"
                element={authorized ? <Navigate to="/alibaba" /> : <Signin />}
              />
              <Route
                path="/signup"
                element={authorized ? <Navigate to="/alibaba" /> : <Signup />}
              />
              <Route
                path="/alibaba"
                element={authorized ? <Alibaba /> : <Navigate to="/signin" />}
              />
              <Route
                path="/techstorelist"
                element={
                  authorized ? <TechStoreList /> : <Navigate to="/signin" />
                }
              />
              <Route
                path="/electronic"
                element={
                  authorized ? <Electronic /> : <Navigate to="/electronic" />
                }
              />
              <Route
                path="/productdetails"
                element={
                  authorized ? <ProductDetails /> : <Navigate to="/signin" />
                }
              />
              <Route
                path="/cartpage"
                element={authorized ? <Cart /> : <Navigate to="/signin" />}
              />
            </Routes>
      </ProductProvider>
          </Suspense>
        </div>
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
