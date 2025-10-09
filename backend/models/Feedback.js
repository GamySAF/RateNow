const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  serviceRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  foodRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  cleanlinessRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comments: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
