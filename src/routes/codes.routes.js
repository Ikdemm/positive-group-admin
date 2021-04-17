const router = require("express").Router();
const codesController = require("../controllers/codes.controller");
const authenticateToken = require("../middlewares/authenticateToken");

router.get("/generate-code", authenticateToken, codesController.generateCode);

module.exports = router;
