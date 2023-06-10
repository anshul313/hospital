const express = require('express');
var router = express.Router();
const passport = require('passport');
var patient_controller = require('../controller/patients_controllers.js');

router.post('/register',patient_controller.register);
router.post('/login',passport.authenticate('jwt', { session: false }),patient_controller.login);
router.post('/:id/create_report',passport.authenticate('jwt', { session: false }),patient_controller.create_report);
router.get('/:id/all_reports',passport.authenticate('jwt', { session: false }),patient_controller.all_reports);




module.exports=router;