const passport = require("passport");
const dotenv = require('dotenv').config();
// console.log(process.env)
var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const Doctor = require("../models/doctors");

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretKey
};

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
   var user = Doctor.findOne({ id: jwt_payload.sub });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    })
);

module.exports = passport;