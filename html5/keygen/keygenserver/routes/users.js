var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/keygen', function (req, res, next) {
  console.log(req.body);
  res.send('respond with a resource');
});

module.exports = router;
