const router = require("express").Router();
const defaultInviterController = require("../controllers/default-inviter.controller");
const { authenticateToken } = require("../middlewares");

router.get('/', authenticateToken,
    defaultInviterController.getDefaultInviter
)

router.post('/unassign', authenticateToken,
    defaultInviterController.unassignDefaultInviter
)
router.post('/assign/:userId', authenticateToken,
    defaultInviterController.assignDefaultInviter
)

module.exports = router;