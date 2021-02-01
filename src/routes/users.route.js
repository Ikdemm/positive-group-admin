const express = require("express");
const router = express.Router();
const User = require("../models/user");


// Retrieving existing users

router.get("/", (req, res) => {
    User.find({})
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        })
});

// Creating a new user

router.post("/", (req, res) => {
    const userData = req.body;
    let newUser = new User(userData);

    User.save((newUser))
        .then(() => {
            res.status(200).json({
                message: "Added!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        })
})


// Updating an existing user

router.put("/:id", (req, res) => {
    let updatedUser = req.body;
    User.updateOne({ _id: req.params.id }, updatedUser)
        .then(() => {
            res.status(200).json({
                message: "Updated!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        })
})


// Delete existing user

router.delete("/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).json({
                message: "Deleted!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        })
})


module.exports = router;
