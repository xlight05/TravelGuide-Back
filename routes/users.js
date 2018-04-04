const express = require('express');
const router = express.Router();
const User = require('./../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Sign up Route
router.post('/signup',(req,res)=>{
    res.redirect('./auth/google');
});

//Login Route
router.post('/login',(req,res)=>{
    res.redirect('./auth/google');
});

//Profile Information route
router.get('/profile/:email',(req,res)=>{
    let email = req.params.email;
    User.findOne ({email}).then((currentUser)=>{
        if (currentUser) {
            res.send(currentUser);
        }
        else {
            res.send("Not found");
        }
    });
});

module.exports = router;
