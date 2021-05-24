const User = require("../models/user");
const repository = require("../repositories/base.repository");
const { catchAsync } = require("../helpers")

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

        // Get level 1 invitees
        let user = await User.findById(userId);
        let level1Invitees = user.invitees;

        let response = {}

        for (let i = 1; i <= 10; i++) {
            response[`level${i}Invitees`] = []
        }

        await Promise.all(level1Invitees.map(async (invitee) => {
            let currentInvitee = await User.findById(invitee);
            if (currentInvitee != null) {
                let responseInvitee = {
                    inviteeId: invitee,
                    accountType: currentInvitee.accountType,
                    courses: currentInvitee.courses.length
                }
                response.level1Invitees.push(responseInvitee)
            } else {
                User.findByIdAndUpdate(invitee, { $pullAll: { invitees: [invitee] } })
            }

        }))

        for (let i = 1; i < 10; i++) {

            try {
                await Promise.all(
                    response[`level${i}Invitees`].map(async (invitee) => {
                        let invitedUsers = await User.findById(invitee.inviteeId).select({ "invitees": 1, "_id": 0 })
                        if (invitedUsers.invitees) {
                            await Promise.all(invitedUsers.invitees.map(async (inviteeId) => {
                                let currentInvitee = await User.findById(inviteeId);
                                if (currentInvitee != null) {
                                    let responseInvitee = {
                                        inviteeId: inviteeId,
                                        accountType: currentInvitee.accountType,
                                        courses: currentInvitee.courses.length
                                    }
                                    response[`level${i + 1}Invitees`].push(responseInvitee)
                                } else {
                                    User.findByIdAndUpdate(inviteeId, { $pullAll: { invitees: [inviteeId] } })
                                }
                            }))
                        }
                    })
                )
            } catch (err) {
                console.error(err)
            }
        }

        res.status(200).send(response)

    }),

    assignDefaultInviter: catchAsync(async (req, res) => {
        const user = await User.findByIdAndUpdate(req.params.userId, { $set: { isDefaultInviter: true } })
        res.status(200).send({ message: "success" })
    }),

    unassignDefaultInviter: catchAsync(async (req, res) => {
        const user = await User.findByIdAndUpdate(req.params.userId, { $set: { isDefaultInviter: false } })
        res.status(200).send({ message: "success" })
    }),

    getDefaultInviter: catchAsync(async (req, res) => {
        const defaultInviter = await User.findOne({ isDefaultInviter: true });
        res.status(200).send({ defaultInviter: defaultInviter })
    })
}