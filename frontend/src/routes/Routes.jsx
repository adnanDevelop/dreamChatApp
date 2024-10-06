import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "../utils/RouteAuth";

// Main Layout
import Layout from "../components/layout/Layout";

// Auth Routes
import Login from "../modules/authPages/Login";
import NotFound from "../modules/notFound/NotFound";
import Register from "../modules/authPages/Register";
import Dashboard from "../modules/chatDashboard/Dashboard";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="/chat" replace />,
        },
        { path: "/chat", element: <Dashboard /> },
      ],
    },
    {
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
};
