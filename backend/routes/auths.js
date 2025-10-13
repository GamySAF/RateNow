const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptJS");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin"); // ✅ correct path

// 🔑 Use environment variable for JWT secret (safer)
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ============================
// 1️⃣  REGISTER ADMIN
// ============================
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    // Create new admin
    const newAdmin = new Admin({ email, password });
    await newAdmin.save(); // password will be hashed automatically (in model)

    res.status(201).json({ message: "Admin registered successfully ✅" });
  } catch (error) {
    console.error("❌ Register error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
});

// ============================
// 2️⃣  ADMIN LOGIN
// ============================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    // Compare plain password with hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token (valid for 1 hour)
    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful ✅",
      token,
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

module.exports = router;
