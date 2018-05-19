const router = require('express').Router();
const passport = require('passport');

const {User} = require ('./../models/users');

// Auth route for google login. We will be using Passport google staratery and OAuth2 for authentication.
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

router.get('/test',(req,res)=>{
    console.log("Route Called");
    let user = new User ({
        name:"Test Name",
        email:"Test Email",
        country:"Test Country",
        googleId:"123 123"

    });
    user.save().then((createdUser)=>{
        console.log(createdUser);
        // done(null,createdUser);
    }).catch((err)=>{
        console.log(err);
    });
});

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log("Redirect Called");
    res.send(req.user);
});

module.exports = router;