const express = require("express");
const Feedback = require("../databases/feedback");

const router = express.Router();

router.get("/", (req, res) => {
  Feedback.find((err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const newFeedback = new Feedback();
  newFeedback.feedback = req.body.feedback;
  newFeedback.rating = req.body.rating;
  newFeedback.save((err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
