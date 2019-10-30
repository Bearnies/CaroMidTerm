const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
var usermodel = require('../models/model');


passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async function(username, password, done) {
    //Gọi DB lưu trữ nếu đối tượng người dùng được định dạng và chuẩn bị được lưu trữ trong jwt
      try {
        const user = await usermodel.findOne({username, password});
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret'
    },
    async function(jwtPayload, done) {
      //Tìm người dùng trong db
      try {
        const user = await usermodel.findOneById(jwtPayload.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return console.log(err);
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;