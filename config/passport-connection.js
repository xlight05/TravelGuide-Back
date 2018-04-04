const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

const {User} = require ('./../models/users');

passport.serializeUser ((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser ((id,done)=>{
    User.findById (id).then((user)=>{
        done(null,user);
    })
});

/**
 * Google Authentication
 *
 * HCI -
 * We will be using Google Authentication to provide user much easier hassle free login / signup.
 * User doesn't have to fill any kind of  form . They simply have to click login/signup with Google button then they are done.
 * We will be using Passport JS Library for that. It gives Oauth2 Implementation for the authentication System.
 *
 * We can use their personal information (with their authorization ofc) to provide them better user experience without any hassle.
 * Example - Their interests , background
 *
 *
 * Security -
 * We will not store any kind of password inside our database and we will be entirly depending on google for the authentication.
 * Google will be doing all the hashing and security things therefore we have to worry less about the data security.
 *
 *
 */
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
                console.log(currentUser);
                done(null,currentUser);
            }else {
                new User ({
                    name:profile.name,
                    email:profile.email,
                    country:profile.country,
                    googleId:profile.googleId

                }).save().then((createdUser)=>{
                    console.log(createdUser);
                    done(null,createdUser);
                });
            }
        });

    })
);