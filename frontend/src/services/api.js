import axios from "axios";

// ✅ Create Axios instance with backend URL
const API = axios.create({
  baseURL: "https://ratenow.onrender.com", // Render backend URL
});

// ✅ Submit feedback
export const submitFeedback = (feedbackData) => API.post("/feedback", feedbackData);

// ✅ Get all feedback (for Admin Dashboard)
export const getFeedback = () => API.get("/feedback");

export default API;
