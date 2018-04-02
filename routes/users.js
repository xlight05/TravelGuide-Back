const express = require('express');
const SHA256 = require("crypto-js/sha256");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let country = req.body.country;
    //TODO Do the fucking validations
    if ((username&&password&&email&&country)){
        res.send("Success");
    }
    else {
        res.send("Invalid");
    }
});

router.post('/login',(req,res)=>{
    //TODO Implement
    res.send("Works");
});

module.exports = router;
