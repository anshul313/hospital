const express = require('express');
const router = express.Router();

router.use('/doctors',require('../routes/doctors'))
router.use('/patients',require('../routes/patient'))
router.use('/reports',require('../routes/report'))

module.exports= router;