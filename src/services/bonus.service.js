const baseRepository = require("../repositories/base.repository");
const User = require("../models/user")

const getBonusByCourse = (courseId) => {

}

const getBonusByInvitee = (inviteeId) => {

}

module.exports = {
    getBonusTree: async (userId) => {
        try {
            const user = await baseRepository.findOneById(userId, User);
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

            return response

        } catch (error) {
            console.error(error);
            throw error
        }
    },

    calculateBonus: async (userId) => {
        // Get First Level Invitees
        const invitees = (await User.findById(userId).select("invitees -_id")).invitees
        console.log(invitees)
    }
}