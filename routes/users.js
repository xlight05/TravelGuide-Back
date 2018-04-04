const express = require('express');
const router = express.Router();
const User = require('./../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',(req,res)=>{
    res.redirect('./auth/google');
});

router.post('/login',(req,res)=>{
    res.redirect('./auth/google');
});

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
