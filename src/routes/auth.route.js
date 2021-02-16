const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/admins/login", authController.adminLogin);
router.post("/users/signup", authController.signup);
router.post("/users/login", authController.userLogin)

module.exports = router;
