const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('./keys');

const {User} = require ('./../models/users');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
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
        /**
         * Security
         * We will be storing all sentsitive keys and data in a seperate file called keys.js due to security and legal reasons.
         * We will add that file to .gitignore file to prevent adding to public sites like github.
         */
        clientID: '921778900271-hivhneojqakia379sdicf11qkk8s5u49.apps.googleusercontent.com',
        clientSecret: 'MhihKKTnowtUDSbMct0kq4Qr',
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db

        User.findOne ({googleId:profile.id}).then((currentUser)=>{
            if (currentUser){
                console.log(currentUser);
                console.log("Existing");
                done(null,currentUser);

            }else {
                console.log(profile);
                console.log(profile.emails);
                new User ({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    country:"LK",
                    googleId:profile.id,
                    credits:0

                }).save().then((createdUser)=>{
                    console.log("Saved");
                    done(null,createdUser);
                }).catch((err)=>{
                    console.log(err);
                    done(null,err);
                });
            }
        });

    })
);