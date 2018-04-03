const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require ('./../models/users');

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db

        User.findOne ({googleId:profile.id}).then((currentUser)=>{
            if (currentUser){

            }
        })



        console.log(profile);
        new User ({
            name:profile.name,
            email:profile.email,
            country:profile.country,
            googleId:profile.googleId

        }).save().then((createdUser)=>{
            console.log(createdUser);
        });

        done();
    })
);