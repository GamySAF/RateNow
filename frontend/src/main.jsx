import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "./pages/FeedbackForm";
import ThankYouPage from "./pages/ThankYouPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
