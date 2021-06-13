const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const authenticateToken = require("../middlewares/authenticateToken");

// Retrieving existing users
router.get("/", authenticateToken, usersController.getAllUsers);

// Retrieve a single user by id
router.get("/:userId", authenticateToken, usersController.getUserById);

// Updating an existing user
router.put("/:id", authenticateToken, usersController.updateUser)

// Delete existing user
router.delete("/:id", authenticateToken, usersController.deleteUser)


router.get('/:userId/invitees', authenticateToken, usersController.getInvitees)

module.exports = router;