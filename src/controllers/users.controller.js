const User = require("../models/user");
const repository = require("../repositories/base.repository")

module.exports = {

    getAllUsers: async (req, res) => {
        try {
            const users = await repository.findAll(User)
            res.status(200).send(users)
        }
        catch (e) {
            console.error(e);
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await repository.save(req.body, User)
            res.status(201).send(user)
        }
        catch (e) {
            console.error(e);
        }
    },

    updateUser: async (req, res) => {
        try {
            const updatedUser = await repository.updateOne(req.params.id, req.body, User)
            res.status(200).send(updatedUser)
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletedUser = await repository.delete(req.params.id, User)
            res.status(200).send(deletedUser)
        }
        catch (e) {
            console.error(e);
        }
    }
}