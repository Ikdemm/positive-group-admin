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
    },

    getInvitees: async (req, res) => {
        try {
            console.log("yo")
            let allInviteesNumber = 0;
            // Get user id from params
            const userId = req.params.id;
            // Get level1 invitees from bonus tree
            const level1Invitees = await BonusTree.find({ user_id: userId }, 'invitees')
            console.log("========== level1Invitees: ", level1Invitees[0].invitees)
            const level1Number = level1Invitees[0].invitees.length;

            allInviteesNumber += level1Number;

            var response = {
                allInviteesNumber: allInviteesNumber,
                level1Invitees: level1Invitees[0].invitees,
                level2Invitees: [],
                level3Invitees: [],
                level4Invitees: [],
                level5Invitees: [],
            }

            // var i = 1;606388aa57a190bc8bbad3a1
            // if (this[`level${i}Number`]) {
            for (let i = 1; i < 5; i++) {
                try {

                    console.log('============= the value of i: ', i)
                    // if (this[`level${i}invitees`]) {
                    console.log('============= level${i}Invitees: ', i)
                    console.log('============= Level Invitees: ', response[`level${i}Invitees`])
                    response[`level${i}Invitees`].map(async (inviteeId) => {
                        console.log(inviteeId)
                        const invitedUsers = await BonusTree.find({ user_id: inviteeId }, 'invitees')
                        console.log('============= Invited Users: ', invitedUsers[0].invitees)
                        invitedUsers.map((invitedByInvitee) => {
                            console.log('============= Invited Users: ', response[`level${i + 1}Invitees`])
                            // response[`level${i + 1}Invitees`] = response[`level${i + 1}Invitees`].push(invitedByInvitee)
                            response[`level${i + 1}Invitees`].push(invitedByInvitee)
                            console.log('============= Getting Invitees ... ', response[`level${i + 1}Invitees`])
                        })
                    })
                    console.log("============= The response so far ... ", response)
                    response.allInviteesNumber += response[`level${i + 1}Invitees`].length
                    // }
                } catch (err) {
                    console.error(err)
                }
            }

            res.send(response)
            // } else {
            //     res.send({ invitees: 0 })
            // }
        } catch (err) {
            console.error(err)
        }
    },
}