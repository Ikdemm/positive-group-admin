const router = require("express").Router();
const codesController = require("../controllers/codes.controller");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/", authenticateToken, codesController.generateCode);

router.get("/course-codes", authenticateToken, codesController.getCoursesCodes);

router.get("/activation-codes", authenticateToken, codesController.getActivationCodes);

router.get("/credit-codes", authenticateToken, codesController.getCreditCodes);

module.exports = router;
