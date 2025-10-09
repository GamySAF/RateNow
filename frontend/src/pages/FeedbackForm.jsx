import { useState } from "react";
import { submitFeedback } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/feedback.css";
import "../styles/main.css";


function FeedbackForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    restaurantName: "",
    serviceRating: "",
    foodRating: "",
    cleanlinessRating: "",
    comments: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await submitFeedback(form);  // Save feedback to backend
    navigate("/thankyou");       // Only redirect if save worked
  } catch (error) {
    console.error("Error submitting feedback:", error);
    alert("Something went wrong. Please try again."); // Optional user feedback
  }
};


  return (
      <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <input
        type="text"
        name="restaurantName"
        placeholder="Restaurant Name"
        value={form.restaurantName}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="serviceRating"
        placeholder="Service Rating (1-5)"
        value={form.serviceRating}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="foodRating"
        placeholder="Food Rating (1-5)"
        value={form.foodRating}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="cleanlinessRating"
        placeholder="Cleanliness Rating (1-5)"
        value={form.cleanlinessRating}
        onChange={handleChange}
        required
      />
      <textarea
        name="comments"
        placeholder="Additional comments"
        value={form.comments}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  </div>);
}

export default FeedbackForm;
