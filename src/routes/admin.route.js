const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAdminData);

router.get("/:id", adminController.getAdminById);

router.post("/", adminController.createAdmin);

router.put("/:id", adminController.updateAdmin);

router.delete("/:id", adminController.deleteAdmin);

module.exports = router;
