const Feedback = require("../models/Feedback");

// POST /feedback → save new feedback
exports.createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /feedback → fetch all feedback
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
