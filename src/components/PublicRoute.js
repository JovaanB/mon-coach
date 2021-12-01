import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? <Navigate to="/dashboard/app" /> : children;
};

export default PublicRoute;
