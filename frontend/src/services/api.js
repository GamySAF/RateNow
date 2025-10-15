import axios from "axios";

// ✅ Create Axios instance with backend URL
const API = axios.create({
  baseURL: "https://ratenow.onrender.com/", // Render backend URL
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ✅ Submit feedback
export const submitFeedback = (feedbackData) => API.post("/feedback", feedbackData);

// ✅ Get all feedback (for Admin Dashboard)
export const getFeedback = () => API.get("/feedback");

export default API;

