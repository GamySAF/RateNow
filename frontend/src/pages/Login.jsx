import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api"; // import Axios instance

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await API.post("/auth/login", formData);

      setMessage("✅ Login successful!");
      navigate("/admin"); // redirect to admin dashboard
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(`❌ ${error.response.data.message}`);
      } else {
        setMessage("⚠️ Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Don’t have an account? <a href="/auth/register">Register</a>
      </p>
    </div>
  );
}

export default Login;
