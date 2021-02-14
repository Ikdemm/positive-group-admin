const User = require("../models/user");

module.exports = {

    getAllUsers: (req, res) => {
        User.find({})
            .then((users) => {
                res.status(200).send(users)
            })
            .catch((error) => {
                res.status(400).json({
                    error: error
                });
            })
    },

    createUser: (req, res) => {
        let newUser = new User(req.body);

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
    },

    updateUser: (req, res) => {
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
    },

    deleteUser: (req, res) => {
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
    }
}