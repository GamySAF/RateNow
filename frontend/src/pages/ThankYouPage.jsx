import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function ThankYouPage() {
  return (
    <div className="thankyou">
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Thank You for Your Feedback!</h2>
      <p>Your opinion helps us improve.</p>
      <Link to="/">Submit Another Feedback</Link>
    </div>
    </div>
  );
}

export default ThankYouPage;
