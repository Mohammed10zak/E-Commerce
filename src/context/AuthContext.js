import useAuth from "../hooks/useAuth";
import React, { createContext, useContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
