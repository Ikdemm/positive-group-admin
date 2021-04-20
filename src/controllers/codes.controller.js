const ActivationCode = require("../models/activationCode");
const CreditCode = require("../models/creditCode");
const codeGenerator = require("../helpers/codesGenerator");
const CourseCode = require("../models/courseCode");
const Course = require("../models/course");

module.exports = {

    generateCode: async (req, res) => {
        try {
            let createdCode = null;
            let newCode = null;
            let code = codeGenerator();
            let createdOn = new Date();
            switch (req.body.codeType) {
                case 'activation':
                    newCode = {
                        code: code,
                        createdOn: createdOn
                    }
                    createdCode = await ActivationCode.create(newCode)
                    break;
                case 'course':
                    let courseId = await Course.findOne({ name: req.body.course }, '_id')
                    newCode = {
                        code: code,
                        course: courseId._id,
                        createdOn: createdOn
                    }
                    createdCode = await CourseCode.create(newCode)
                    break;
                case 'credit':
                    newCode = {
                        code: code,
                        value: req.body.value,
                        createdOn: createdOn
                    }
                    createdCode = await CreditCode.create(newCode)
                    break;
            }
            res.status(200).send(createdCode)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },

    getActivationCodes: async (req, res) => {
        try {
            let activationCodes = await ActivationCode.find({})
            res.status(200).send(activationCodes)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    getCoursesCodes: async (req, res) => {
        try {
            let coursesCodes = await CourseCode.find({})
            res.status(200).send(coursesCodes)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    getCreditCodes: async (req, res) => {
        try {
            let creditCodes = await CreditCode.find({})
            res.status(200).send(creditCodes)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    deleteCourseCode: async (req, res) => {
        try {
            let codeId = req.params.codeId
            await CourseCode.deleteOne({ _id: codeId })
            res.status(200).send({ message: "Deleted" })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    deleteActivationCode: async (req, res) => {
        try {
            let codeId = req.params.codeId
            await ActivationCode.deleteOne({ _id: codeId })
            res.status(200).send({ message: "Deleted" })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    deleteCreditCode: async (req, res) => {
        try {
            let codeId = req.params.codeId
            await CreditCode.deleteOne({ _id: codeId })
            res.status(200).send({ message: "Deleted" })
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}