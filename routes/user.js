var express = require("express");
var router = express.Router();

var user_controller = require("../controllers/user");


router.get("/register", user_controller.user_view_register);
router.post("/register", user_controller.user_register);

router.get("/", user_controller.user_view_login);
router.post("/", user_controller.user_login);


module.exports = router;