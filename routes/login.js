const express = require("express");
const Login = require("../databases/login");

const router = express.Router();

router.get("/", (req, res) => {
  const user = new Login();
  user.username = "umesh";
  user.password = "umesh";
  user.save();
});

module.exports = router;
