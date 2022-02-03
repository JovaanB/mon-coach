import React from "react";
import { Navigate } from "react-router-dom";
import { supportsRole } from "../utils/functions";
import authService from "../services/auth.service";

const ProtectedRoute = ({ children, authorizedRoles, forbiddenRoles }) => {
  const isAuthenticated = authService.getCurrent();
  const isAuthorized = supportsRole({
    authorizedRoles,
    forbiddenRoles,
    userRole: isAuthenticated?.roles[0],
  });

  return isAuthenticated && isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
