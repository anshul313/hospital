var Doctor = require("../models/doctors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

module.exports.register = async function (req, res) {
  var data = {
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };
 var newdoctor= await Doctor.create(data);
    if (newdoctor) {
      delete newdoctor.password;
      return res.status(200).json({
        data: newdoctor,
        error: false
      });
    }

};

module.exports.login = async function (req, res) {
  const user = await Doctor.findOne({ email: req.body.email });
  const token = jwt.sign(user.toJSON(), process.env.secretKey);
  if (user) {
    console.log("body", req.body.password);
    console.log("user", user.password);
    console.log("user", user);
    if (req.body.password != user.password) {
      return res.status(500).json({
        data: null,
        error: true,
        message: "invalid password",
      });
    } else {
      return res.status(200).json({
        token: token,
        error: false,
        message: "success",
      });
    }
  }
};


