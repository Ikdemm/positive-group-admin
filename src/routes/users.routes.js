const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const authenticateToken = require("../middlewares/authenticateToken");

// Retrieving existing users
router.get("/", authenticateToken, usersController.getAllUsers);

// Updating an existing user
router.put("/:id", authenticateToken, usersController.updateUser)

// Delete existing user
router.delete("/:id", authenticateToken, usersController.deleteUser)


router.get('/:userId/invitees', authenticateToken, usersController.getInvitees)

router.post('/default-inviter/unassign/:userId', authenticateToken, usersController.unassignDefaultInviter)
router.post('/default-inviter/assign/:userId', authenticateToken, usersController.assignDefaultInviter)

router.get('/default-inviter/', authenticateToken, usersController.getDefaultInviter)


module.exports = router;