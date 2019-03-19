var express = require('express');
var router = express.Router();


var { appName, homeContent } = require('../data/data.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: appName, ...homeContent });
});

module.exports = router;
