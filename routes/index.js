var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.send("Get works");
});

router.post('/test',function (res,req) {
    res.send("Post works");
});

module.exports = router;
