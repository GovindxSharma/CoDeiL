const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async function (email, password, done) {
    try {
        const user = await User.findOne({ email: email });
        if (!user || user.password !== password) {
            console.log('Error user not found');
            return done(null, false);
        }
        return done(null, user);
    } catch (err) {
        console.log('Error in getting the User-passport');
        return done(err);
    }
}));

// Assigning the id to the cookie
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// For the browser side to retrace the user with the id
passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        return done(null, user);
    } catch (err) {
        console.log('Error in deserializing the user');
        return done(err);
    }
});

// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
    return next();
    }
    
    // if the user is not signed in
    return res.redirect('/users/sign-in');
    }
    
    passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
    // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
    res.locals.user = req.user;
    }
    
    next();
    }
    
module.exports = passport;
