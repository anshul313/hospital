const express = require('express');
//getting router instance from express to create routes
const router = express.Router();
// import other routes files here
router.use('/doctors',require('../routes/doctors'))
router.use('/patients',require('../routes/patient'))
router.use('/reports',require('../routes/report'))

module.exports= router;