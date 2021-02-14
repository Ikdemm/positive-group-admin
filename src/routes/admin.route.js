const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.get("/:id", adminController.getAdminData);

router.put("/:id", adminController.updateAdmin);

router.put("/:id", adminController.deleteAdmin);

module.exports = router;
