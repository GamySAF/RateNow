const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// 1️⃣ Define the schema
const adminSchema = new mongoose.Schema({
   email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
});

// 2️⃣ Hash password before saving to database
adminSchema.pre("save", async function (next) {
  // Only hash if password is new or modified
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10); // generate salt
    this.password = await bcrypt.hash(this.password, salt); // hash password
    next(); // continue saving
  } catch (err) {
    next(err);
  }
});

// 3️⃣ Create and export the model
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
