const router = require("express").Router();
const usersController = require("../controllers/users.controller");
const authenticateToken = require("../middlewares/authenticateToken");

// Retrieving existing users

router.get("/", authenticateToken, usersController.getAllUsers);

// Creating a new user

router.post("/", authenticateToken, usersController.createUser)

// Updating an existing user

router.put("/:id", authenticateToken, usersController.updateUser)

// Delete existing user

router.delete("/:id", authenticateToken, usersController.deleteUser)


router.get('/bonus/:id', usersController.getInvitees)


module.exports = router;