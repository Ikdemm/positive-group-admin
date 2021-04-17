require("dotenv").config();
const User = require("../models/user");

module.exports = {

    requestCourse: async (req, res) => {
        try {
            let userId = req.params.userId;
            let courseId = req.params.courseId;
            await User.findByIdAndUpdate(userId, { $push: { requests: courseId } })
            res.status(200).send("Request Created")
        } catch (error) {
            res.status(500).error(error)
        }
    },

    getAllRequests: async (req, res) => {
        try {
            let requetsList = await User.find({}, { 'requests': 1, '_id': 0 })
            console.log(requetsList)
            res.status(200).send(requetsList)
        } catch (error) {
            res.status(500).error(error)
        }
    }
}