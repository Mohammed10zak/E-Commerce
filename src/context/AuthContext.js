import useAuth from "../hooks/usaAuth";
import React, { createContext, useContext } from "react";


export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const General = useAuth();
  return (
    <AuthContext.Provider value={General}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};