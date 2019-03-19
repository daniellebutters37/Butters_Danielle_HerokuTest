var express = require('express');
var router = express.Router();


var { appName, allProducts } = require('../data/data.js');

router.get('/', function(req, res, next) {
  res.render('gopro', { title: 'All Products', allProducts });
});

router.get('/:gopro_id', function(req, res, next) {
    // for each object find all params
    var thisGopro = allProducts.find(gopro => gopro.id === req.params.gopro_id)
    res.render('gopro_products', { title: thisGopro.name, ...thisGopro });
  });

module.exports = router;
