const express = require("express");
const router = express.Router();
const FeedbackController = require("../controllers/FeedbackController");

// POST /feedback → submit new feedback
router.post("/", FeedbackController.createFeedback);

// GET /feedback → get all feedback (for admin)
router.get("/", FeedbackController.getAllFeedback);

module.exports = router;
