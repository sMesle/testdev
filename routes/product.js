var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/product');



router.get('/ajouter', product_controller.test);
router.post('/ajouter', product_controller.product_create);




module.exports = router;