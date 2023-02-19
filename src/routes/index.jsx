import React, { lazy } from "react";
import { useEffect } from "react";
import { Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/Loading";

import { useAuthContext } from "../context/AuthContext";

const Signin = lazy(() => import("../pages/Signin/index"));
const Signup = lazy(() => import("../pages/Signup/index"));
const Alibaba = lazy(() => import("../pages/Alibaba"));
const TechStoreList = lazy(() => import("../pages/TechStorelist/index"));
const Electronic = lazy(() => import("../pages/Electronic/index"));
const ProductDetails = lazy(() => import("../pages/ProductDetails/index"));
const Cart = lazy(() => import("../pages/BasicCart"));

const Routers = () => {
  const { authorized, setAuthorized, setToken } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      setAuthorized(true);
    }
  }, [setToken, setAuthorized]);

  return (
    <Suspense fallback={<Loading />}>
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
          element={authorized ? <TechStoreList /> : <Navigate to="/signin" />}
        />
        <Route
          path="/electronic"
          element={authorized ? <Electronic /> : <Navigate to="/electronic" />}
        />
        <Route
          path="/productdetails"
          element={authorized ? <ProductDetails /> : <Navigate to="/signin" />}
        />
        <Route
          path="/cartpage"
          element={authorized ? <Cart /> : <Navigate to="/signin" />}
        />
      </Routes>
    </Suspense>
  );
};

export default Routers;
