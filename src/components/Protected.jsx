import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user } = useAuth();

  // Not logged in → redirect
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in → allow access
  return <Outlet />;
}
