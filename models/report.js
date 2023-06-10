const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    doctor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    },
    Patient_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Patient"
    },
    report_status:{
        type:String
    },
    date:{
        type:String,
        default:Date.now
    }
},{
    timestamps:true
});

const Report = mongoose.model('Report',reportSchema);

module.exports = Report;