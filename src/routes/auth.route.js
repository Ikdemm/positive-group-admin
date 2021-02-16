const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/admins/login", authController.adminLogin);
router.post("/admins/signup", authController.adminSignup);

router.post("/users/signup", authController.signup);
router.post("/users/login", authController.login)

module.exports = router;
