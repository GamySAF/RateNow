import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "./pages/FeedbackForm";
import ThankYouPage from "./pages/ThankYouPage";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
           <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
