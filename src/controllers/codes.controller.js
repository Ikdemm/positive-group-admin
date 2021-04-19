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
            switch (req.body.codeType) {
                case 'activation':
                    createdCode = await ActivationCode.create({ code: code })
                    break;
                case 'course':
                    let courseId = await Course.findOne({ name: req.body.course }, '_id')
                    newCode = {
                        code: code,
                        course: courseId._id
                    }
                    createdCode = await CourseCode.create(newCode)
                    break;
                case 'credit':
                    newCode = {
                        code: code,
                        value: req.body.value
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

    },

    getCoursesCodes: async (req, res) => {

    },

    getCreditCodes: async (req, res) => {

    },
}