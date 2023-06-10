var Report = require('../models/report');

module.exports.getReportByStatus = async function(req,res){

    const allReportBySatus = await Report.find({report_status:req.params.status});
    if(allReportBySatus){
        return res.status(200).json({
            data: allReportBySatus,
            error: false
          });
    }
}