const express = require("express");
const Login = require("../databases/login");

const router = express.Router();

router.get("/", (req, res) => {
  Login.find((err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

router.post("/user", (req, res) => {
  const user = new Login();
  user.username = req.body.username;
  user.password = req.body.password;
  user.save((err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
