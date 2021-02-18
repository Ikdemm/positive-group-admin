const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/admins/login", authController.login);
router.post("/admins/signup", authController.signup);
router.post("/admins/forgot", authController.forgotPassword);

module.exports = router;
