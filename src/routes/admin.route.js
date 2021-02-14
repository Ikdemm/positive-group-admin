const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

router.get("/", adminController.getAdminData);

router.put("/", adminController.updateAdmin);

module.exports = router;
