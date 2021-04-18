require("dotenv").config();
const User = require("../models/user");
const Course = require("../models/course")

module.exports = {

    getAllCoursesRequests: async (req, res) => {
        try {
            let requestsList = []

            // Getting the requesting user
            let requestingUsers = await User.find({ courseRequests: { $exists: true, $not: { $size: 0 } } }, { projection: { _v: 0 } })

            await Promise.all(requestingUsers.map(async (singleUser) => {

                await Promise.all(singleUser.courseRequests.map(async (requestedCourse) => {
                    let course = await Course.findById(requestedCourse)
                    console.log(course)
                    requestsList = requestsList.concat([{
                        user: singleUser,
                        course: course
                    }])
                }))
            }))

            console.log(requestsList)
            res.status(200).send(requestsList)

        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    getAllActivationRequests: async (req, res) => {
        try {
            let pendingUsers = await User.find({ accountType: 'pending' });
            res.status(200).send(pendingUsers)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}