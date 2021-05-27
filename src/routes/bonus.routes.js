const router = require("express").Router();
const bonusController = require("../controllers/bonus.controller")

router.get("/:userId", bonusController.getBonus)

module.exports = router