import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/AuthContext";
const ProtectedRoute = ({ children }) => {
  let { user } = useUserAuth();
  localStorage.setItem("users", JSON.stringify(user));

  if (!localStorage.getItem("users")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
