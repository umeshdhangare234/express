const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "login" }
);

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
