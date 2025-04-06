import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = sessionStorage.getItem("authToken");
  return token ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;