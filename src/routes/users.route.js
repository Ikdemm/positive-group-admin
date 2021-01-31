const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Retrieving existing users

router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if (err) return handleError(err);
        res.send(users);
    });
});

// Creating a new user



module.exports = router;
