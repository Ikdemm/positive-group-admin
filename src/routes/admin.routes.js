const router = require("express").Router();
const adminController = require("../controllers/admin.controller");
const authenticateToken = require("../middlewares/authenticateToken");

router.get("/", authenticateToken, adminController.getAdminData);

router.get("/:email", authenticateToken, adminController.getAdminByEmail);

router.post("/", adminController.createAdmin);

router.put("/:id", authenticateToken, adminController.updateAdmin);

router.delete("/:id", authenticateToken, adminController.deleteAdmin);

module.exports = router;
