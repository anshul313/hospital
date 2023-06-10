var mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
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

var Doctor = mongoose.model('Doctor',doctorSchema);
module.exports = Doctor;