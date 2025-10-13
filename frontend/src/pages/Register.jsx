import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {
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
      const res = await API.post("/auth/register", formData);

      setMessage("✅ Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/auth/login"), 2000);
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
      <h2>Admin Register</h2>
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
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Already have an account? <Link to="/auth/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
