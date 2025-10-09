import axios from "axios";

// Backend URL (change if deployed later)
const API = axios.create({
  baseURL: "http://localhost:5000", // backend server
});

// Submit feedback
export const submitFeedback = (feedbackData) =>
  API.post("/feedback", feedbackData);

// Get all feedback (for Admin Dashboard)
export const getFeedback = () => API.get("/feedback");
