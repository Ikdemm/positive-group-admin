const User = require("../models/user");
const repository = require("../repositories/base.repository");
const bonusService = require("../services/bonus.service");
const { catchAsync } = require("../helpers");

module.exports = {

    getAllUsers: catchAsync(async (req, res) => {
        const users = await repository.findAll(User)
        res.status(200).send(users)
    }),

    updateUser: catchAsync(async (req, res) => {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(updatedUser)
    }),

    deleteUser: catchAsync(async (req, res) => {
        const deletedUser = await repository.delete(req.params.id, User)
        res.status(200).send(deletedUser)
    }),

    getInvitees: catchAsync(async (req, res) => {
        // Get user id from params
        let userId = req.params.userId;
        let bonusTree = bonusService.getBonusTree(userId)
        res.status(200).send(bonusTree)
    })
}