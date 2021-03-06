const passport = require('passport');
const JWTstrategy= require('passport-jwt').Strategy;
const ExtractJWT= require('passport-jwt').ExtractJwt;

const User = require('../models/users');
const env= require('./environment');

let opts ={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.jwt_secret
}


passport.use(new JWTstrategy(opts, function(jwtPayLoad,done){

User.findById(jwtPayLoad._id,function(err,user){
    if(err){console.log('error in finding user from jwt');
    }
    if(user){
        return done(null,user);
    }else{
        return done(null,false);
    }
})

}));