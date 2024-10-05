import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Protected routes
// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Public routes
// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/chat" replace />;
  }

  return <>{children}</>;
};
