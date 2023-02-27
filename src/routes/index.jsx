import React, { lazy } from "react";
import { useEffect } from "react";
import { Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/Loading";

import { useAuthContext } from "../context/AuthContext";
import ProtectedRoute from "./../components/ProtectedRoute/index";

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

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/alibaba" element={<Alibaba />} />

          <Route path="/techstorelist" element={<TechStoreList />} />
          <Route path="/electronic" element={<Electronic />} />

          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="/cartpage" element={<Cart />} />
        </Route>
        <Route path="/*" element={<h3>Page not Found</h3>} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
