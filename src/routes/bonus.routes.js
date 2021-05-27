const router = require("express").Router();
const bonusController = require("../controllers/bonus.controller")

router.get("/:userId", bonusController.getBonus)
router.get("/tree/:userId", bonusController.getBonusTree)

module.exports = router