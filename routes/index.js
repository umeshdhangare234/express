var express = require("express");
var router = express.Router();
const Login = require("../databases/login");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
