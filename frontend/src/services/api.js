import axios from "axios";

// Backend URL (change if deployed later)
const API = axios.create({
  baseURL: "https://ratenow.onrender.com",
});

// Submit feedback
export const submitFeedback = (feedbackData) =>
  API.post("/feedback", feedbackData);

// Get all feedback (for Admin Dashboard)
export const getFeedback = () => API.get("/feedback");
