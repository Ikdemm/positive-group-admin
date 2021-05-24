require("dotenv").config();
const User = require("../models/user");
const Course = require("../models/course");
const { catchAsync } = require("../helpers")

module.exports = {

    getAllCoursesRequests: catchAsync(async (req, res) => {
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
    }),

    getAllActivationRequests: catchAsync(async (req, res) => {
        let pendingUsers = await User.find({ accountType: 'pending' });
        res.status(200).send(pendingUsers)
    })
}