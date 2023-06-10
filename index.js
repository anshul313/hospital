const express = require('express');
const port = 8000;
// getting express function to setup express server using app
const app = express();
const bodyParser = require('body-parser');
//calling mongoose file to setup mongodb database connection
const db = require('./config/mongoose');
// require passport to setup authentication
const passport = require('passport');
// require passport from config to setup passport jwt authentication
const passportJWT = require("./config/passport");

// getting .env variable access here
const dotenv = require('dotenv').config();

// setup passport in middleware
app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// require routes here to setup project routes
app.use('/',require('./routes/index.js'));

//setup express server to run on a specific port mention above in line 2

app.listen(port,function(){
    console.log(`server running on port: ${port}`);
})