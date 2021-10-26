const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      required: false,
    },
    rating: {
      type: String,
      required: false,
    },
  },
  { collection: "feedback" }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
