var express = require("express");
var router = express.Router();

var product_controller = require("../controllers/product");

router.get("/ajouter", product_controller.test);
router.post("/ajouter", product_controller.product_create);
router.get("/", product_controller.list);
router.get('/:id/editer', product_controller.view_edit);
router.post('/:id/editer', product_controller.view_edit_product);
router.get('/:id/supprimer', product_controller.product_delete);

module.exports = router;