const router = require('express').Router();
const passport = require('passport');


// Auth route for google login. We will be using Passport google staratery and OAuth2 for authentication.
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('Auth complete.');
});

module.exports = router;