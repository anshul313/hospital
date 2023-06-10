var mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

var Patient = mongoose.model('Patient',patientSchema);
module.exports = Patient;