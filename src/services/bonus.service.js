const baseRepository = require("../repositories/base.repository");
const User = require("../models/user")
const { ACTIVATION_FEE, ACTIVATION_BONUS, BONUS_PERCENTAGE, INITIAL_BONUS_TREE } = require("../constants")

const getCoursesBonus = (courses) => {
    let totalMoneySpentOnCourses = courses.reduce((course, acc) => {
        acc += course.price
    }, 0)
    return totalMoneySpentOnCourses * BONUS_PERCENTAGE
}

const getBonusByInvitee = async (invitee) => {
    let coursesBonus = getCoursesBonus(invitee.courses)
    return invitee.accountType == 'premium' ? ACTIVATION_BONUS + coursesBonus : 0;
}

const getInviteeResponse = async (inviteeId) => {
    try {
        let invitee = await baseRepository.findOneById(inviteeId, User);
        if (invitee != null) {
            // If the user exists, we calculate the bonus from activation and courses
            let bonus = await getBonusByInvitee(invitee)
            return {
                inviteeId: invitee._id,
                accountType: invitee.accountType,
                bonus: bonus,
                coursesNumber: invitee.courses.length
            }
        } else {
            //If the user don't exist, we return null
            return null
        }
    } catch (error) {
        throw error
    }
}

const getBonusTree = async (userId) => {
    try {
        let response = INITIAL_BONUS_TREE

        const level1Invitees = await User.findById(userId).select("-_id invitees");

        if (level1Invitees.length == 0) return response

        await Promise.all(level1Invitees.invitees.map(async (invitee) => {
            let responseInvitee = await getInviteeResponse(invitee)
            // The response now holds the list of all level1 invitees
            responseInvitee && response.level1Invitees.push(responseInvitee)
            // If the user was deleted and couldn't be found, we delete it from the list of invitees
            !responseInvitee && User.findByIdAndUpdate(userId, { $pullAll: { invitees: [invitee] } })
        }))

        for (let i = 1; i < 10; i++) {

            try {
                await Promise.all(
                    response[`level${i}Invitees`].map(async (invitee) => {
                        if (invitee != null) {
                            let invitedUsers = (await User.findById(invitee.inviteeId).select({ "invitees": 1, "_id": 0 })).invitees
                            if (invitedUsers) {
                                await Promise.all(invitedUsers.map(async (inviteeId) => {
                                    let responseInvitee = await getInviteeResponse(inviteeId)
                                    response[`level${i + 1}Invitees`].push(responseInvitee)
                                }))
                            }
                        }
                    })
                )
            } catch (error) {
                throw error
            }
        }

        return response

    } catch (error) {
        console.error(error);
        throw error
    }
}

getBonus = async (userId) => {
    try {
        let totalBonus = 0
        const bonusTree = await getBonusTree(userId)
        // Looping through the BonusTree by level
        for (let level in bonusTree) {
            // Getting the total bonus of each level and adding it to the total bonus
            let levelBonus = bonusTree[level].reduce((acc, invitee) => {
                return acc += invitee.bonus
            }, 0)
            totalBonus += levelBonus
        }
        return totalBonus
    } catch (error) {
        throw error
    }

}

module.exports = {
    getBonusTree,
    getBonus
}