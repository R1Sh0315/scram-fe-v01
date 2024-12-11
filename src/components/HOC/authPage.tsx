import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    token ? navigate("/dashboard") : null;
  }, [navigate]);
  return <>{children}</>;
};

export default AuthPage;
