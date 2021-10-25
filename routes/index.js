var express = require("express");
var router = express.Router();
const Login = require("../databases/login");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render("login");
  const user = new Login();
  user.username = "umesh";
  user.password = "umesh";
  user.save();
  res.json(user);
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
