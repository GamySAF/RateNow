import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("token"); // 🟢 changed from localStorage

  if (!token) {
        
    // Save token
    const token = localStorage.getItem("token")
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
