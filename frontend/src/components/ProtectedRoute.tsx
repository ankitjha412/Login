import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!token) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
