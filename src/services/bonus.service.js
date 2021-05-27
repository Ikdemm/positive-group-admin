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
    return currentInvitee.accountType == 'premium' ? ACTIVATION_BONUS + coursesBonus : 0;
}

const getResponseInvitee = async (inviteeId) => {
    try {
        let invitee = await baseRepository.findOneById(inviteeId, User);
        let bonus = getBonusByInvitee(invitee)

        return {
            inviteeId: invitee,
            accountType: invitee.accountType,
            bonus: bonus,
            coursesNumber: invitee.courses.length
        }
    } catch (error) {
        throw error
    }
}

const getBonusTree = async (userId) => {
    try {
        let response = INITIAL_BONUS_TREE

        const level1Invitees = await User.findById(userId).select("-_id invitees");

        await Promise.all(level1Invitees.invitees.map(async (invitee) => {
            let responseInvitee = await getResponseInvitee(invitee)
            response.level1Invitees.push(responseInvitee)
        }))

        for (let i = 1; i < 10; i++) {

            try {
                await Promise.all(
                    response[`level${i}Invitees`].map(async (invitee) => {
                        let invitedUsers = (await User.findById(invitee.inviteeId).select({ "invitees": 1, "_id": 0 })).invitees
                        if (invitedUsers) {
                            await Promise.all(invitedUsers.invitees.map(async (inviteeId) => {
                                let responseInvitee = await getResponseInvitee(inviteeId)
                                response[`level${i + 1}Invitees`].push(responseInvitee)
                            }))
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
        console.log(bonusTree)
        for (let level in bonusTree) {
            // Getting the total bonus of each level and adding it to the total bonus
            totalBonus += bonusTree[level].reduce((invitee, acc) => {
                acc += invitee.bonus
            }, 0)
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