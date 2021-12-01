import { Navigate, useRoutes } from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard";
import { LogoOnlyLayout } from "./layouts/LogoOnlyLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { DashboardApp } from "./pages/DashboardApp";
import { Products } from "./pages/Products";
import { Planning } from "./pages/Planning";
import { Blog } from "./pages/Blog";
import { User } from "./pages/User";
import { NotFound } from "./pages/Page404";
import { OneUser } from "./pages/OneUser";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

export const Router = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "planning", element: <Planning /> },
        { path: "user", element: <User /> },
        { path: "user/:id", element: <OneUser /> },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: (
        <PublicRoute>
          <LogoOnlyLayout />
        </PublicRoute>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "/", element: <Navigate to="/dashboard/app" /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [{ path: "404", element: <NotFound /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};
