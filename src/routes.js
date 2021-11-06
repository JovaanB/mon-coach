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

export const Router = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: "app", element: <DashboardApp /> },
        { path: "planning", element: <Planning /> },
        { path: "user", element: <User /> },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "/", element: <Navigate to="/dashboard/app" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};