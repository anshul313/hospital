const express = require('express');
const router = express.Router();
const passport = require('passport');
var report_controller =  require('../controller/reports_controllers');

  router.get('/:status',passport.authenticate('jwt', { session: false }),report_controller.getReportByStatus);



module.exports=router;