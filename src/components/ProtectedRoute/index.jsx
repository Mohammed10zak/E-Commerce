import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const { authorized } = useAuthContext();
  return (
    <div>
      {authorized ? (
        <>
          <Outlet />
        </>
      ) : (
        <Navigate to="/signin" />
      )}
    </div>
  );
};

export default ProtectedRoute;
