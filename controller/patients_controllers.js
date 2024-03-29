//require models to query with database collection in functions
var Patient = require("../models/patient");
var Report  = require("../models/report");
// getting access of jwt from jsonwebtoken to create new token using jwt.sign method
const jwt = require("jsonwebtoken");
// getting .env variable access here
const dotenv = require("dotenv").config();

//creating function to register new patient

module.exports.register = async function (req, res) {
  var data = {
    username: req.body.username,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };
  // query create to create new patient
 var newpatient= await Patient.create(data);
    if (newpatient) {
      delete newpatient.password;
      // sending response
      return res.status(200).json({
        data: newpatient,
        error: false
      });
    }

};
// creating function to login patient using  email and password

module.exports.login = async function (req, res) {
  const user = await Patient.findOne({ email: req.body.email });
  const token = jwt.sign(user.toJSON(), process.env.secretKey);
  if (user) {
    console.log("body", req.body.password);
    console.log("user", user.password);
    console.log("user", user);
      // checking password mismatch
    if (req.body.password != user.password) {
       // sending response
      return res.status(500).json({
        data: null,
        error: true,
        message: "mismatch  password",
      });
    } else {
      // sending response
      return res.status(200).json({
        token: token,
        error: false,
        message: "success",
      });
    }
  }
};
// creating function to create new report of patient
module.exports.create_report = async function(req,res){
    var data = {
      doctor_id: req.body.doctor_id,
      Patient_id: req.params.id,
      report_status: req.body.report_status
    }

    var newreport = await Report.create(data);
    if (newreport) {
      return res.status(200).json({
        data: newreport,
        error: false
      });
    }
}


module.exports.all_reports = async  function(req,res){
    const patientallreports = await Report.find({Patient_id: req.params.id}).sort({Date:-1}).populate('doctor_id').populate('Patient_id');
    if (patientallreports) {
      return res.status(200).json({
        data: patientallreports,
        error: false
      });
    }
}

