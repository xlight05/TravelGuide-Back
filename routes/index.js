var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
    var jz = {
        res : "Get works"
    };
  res.send(jz);
});

router.post('/testz', function(req, res, next) {
    var jz = {
        res : "Get works"
    };
    res.send(jz);
});

module.exports = router;
