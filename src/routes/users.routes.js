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


router.post('/default-inviter/:userId', authenticateToken, usersController.assignAutomaticInviter)


router.get('/default-inviter/', authenticateToken, usersController.getAutomaticInviter)


module.exports = router;