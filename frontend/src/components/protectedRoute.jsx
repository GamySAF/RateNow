import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  console.log("🔍 ProtectedRoute check — token value:", token);

  if (!token) {
    console.log("❌ No token found, redirecting to /auth/login");
    return <Navigate to="/auth/login" replace />;
  }

  console.log("✅ Token found, allowing access to protected route");
  return children;
}

export default ProtectedRoute;
