const express = require('express');
var router = express.Router();
const passport = require('passport');
var doctor_controller = require('../controller/doctors_controller.js');

router.post('/register',doctor_controller.register);
router.post('/login',passport.authenticate('jwt', { session: false }),doctor_controller.login);




module.exports=router;