var express = require("express");
var router = express.Router();

var product_controller = require("../controllers/product");

router.get("/ajouter", product_controller.view_product_add);
router.post("/ajouter", product_controller.product_create);
router.get("/", product_controller.product_list);
router.get('/:id/editer', product_controller.view_edit);
router.post('/:id/editer', product_controller.edit_product);
router.get('/:id/supprimer', product_controller.product_delete);

module.exports = router;