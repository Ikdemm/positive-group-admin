const User = require("../models/user");
const repository = require("../repositories/base.repository");
const BonusTree = require("../models/bonusTree")

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
    },

    getInvitees: async (req, res) => {
        // Get user id from params
        let userId = req.params.userId;

        // Get level 1 invitees
        let user = await User.findById(userId);
        let level1Invitees = user.invitees, isUserActivated = user.isActivated;

        let response = {}

        for (let i = 1; i <= 10; i++) {
            response[`level${i}Invitees`] = []
        }

        await Promise.all(level1Invitees.map(async (invitee) => {
            let currentInvitee = await User.findById(invitee);
            if (currentInvitee != null) {
                let responseInvitee = {
                    inviteeId: invitee,
                    isActivated: currentInvitee.isActivated
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
                                        isActivated: currentInvitee.isActivated
                                    }
                                    response[`level${i + 1}Invitees`].push(responseInvitee)
                                } else {
                                    User.findByIdAndUpdate(invitee, { $pullAll: { invitees: [inviteeId] } })
                                }
                            }))
                        }
                    })
                )
            } catch (err) {
                console.error(err)
            }
        }

        res.send(response)

    },
}