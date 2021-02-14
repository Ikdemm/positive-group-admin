const router = require("express").Router();
const usersController = require("../controllers/users.controller")

// Retrieving existing users

router.get("/", usersController.getAllUsers);

// Creating a new user

router.post("/", usersController.createUser)


// Updating an existing user

router.put("/:id", usersController.updateUser)


// Delete existing user

router.delete("/:id", usersController.deleteUser)


module.exports = router;
