const express = require('express');
const port = 8000;
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require("./config/passport");
const dotenv = require('dotenv').config();

app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use('/',require('./routes/index.js'));




app.listen(port,function(){
    console.log(`server running on port: ${port}`);
})