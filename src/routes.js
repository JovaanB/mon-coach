import { Navigate, useRoutes } from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard";
import { LogoOnlyLayout } from "./layouts/LogoOnlyLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Products } from "./pages/Products";
import { Planning } from "./pages/Planning";
import { Blog } from "./pages/Blog";
import { Athlete } from "./pages/Athlete";
import { NotFound } from "./pages/Page404";
import { OneAthlete } from "./pages/OneAthlete";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

export const Router = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute
          authorizedRoles={["ROLE_MASTER", "ROLE_ATHLETE", "ROLE_COACH"]}
        >
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { element: <Navigate to="/dashboard/planning" replace /> },
        { path: "planning", element: <Planning /> },
        { path: "products", element: <Products /> },
        { path: "blog", element: <Blog /> },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute authorizedRoles={["ROLE_MASTER", "ROLE_COACH"]}>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { element: <Navigate to="/dashboard/planning" replace /> },
        { path: "athletes", element: <Athlete /> },
        { path: "athlete/:id", element: <OneAthlete /> },
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
        { path: "join", element: <Register isAthlete /> },
        { path: "/", element: <Navigate to="/dashboard/planning" /> },
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
