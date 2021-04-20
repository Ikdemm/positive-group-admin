const router = require("express").Router();
const codesController = require("../controllers/codes.controller");
const authenticateToken = require("../middlewares/authenticateToken");

router.post("/", authenticateToken, codesController.generateCode);

router.get("/course-codes", authenticateToken, codesController.getCoursesCodes);

router.get("/activation-codes", authenticateToken, codesController.getActivationCodes);

router.get("/credit-codes", authenticateToken, codesController.getCreditCodes);

router.delete("/course-codes/:codeId", authenticateToken, codesController.deleteCourseCode);

router.delete("/activation-codes/:codeId", authenticateToken, codesController.deleteActivationCode);

router.delete("/credit-codes/:codeId", authenticateToken, codesController.deleteCreditCode);

module.exports = router;
