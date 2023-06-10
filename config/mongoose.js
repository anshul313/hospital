var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital');

var db = mongoose.connection;

db.on('error',console.error.bind('error occured during mongo connection'));

db.once('open',function(){
    console.log('database connected successfully');
})

module.exports = db;