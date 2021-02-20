const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.post("/forgot", authController.forgotPassword);

module.exports = router;
