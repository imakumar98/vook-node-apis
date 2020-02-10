//Import Passport and passport jwt modules
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

//ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;

//JwtStrategry which is the strategry for authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};


jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'wowwow';


// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    let user = models.User.findOne({where: {id: jwt_payload.id}});
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  });
  // use the strategy
  passport.use(strategy);