import { useState } from "react";

const useAuth = (url) => {
  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setUsername("");
    setAuthorized(false);


  };

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    token,
    setToken,
    username,
    setUsername,
    logout,
  };
};

export default useAuth;