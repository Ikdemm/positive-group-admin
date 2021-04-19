const ActivationCode = require("../models/activationCode");
const CreditCode = require("../models/creditCode");
const courseCode = require("../models/courseCode");
const codeGenerator = require("../helpers/codesGenerator")

module.exports = {

    generateCode: async (req, res) => {
        try {
            let code = codeGenerator();
            switch (req.body.type) {
                case 'activation':
                    let createdCode = await ActivationCode.save({ code: code })
                    break;
                case 'course':
                    let newCode = {
                        code: code,
                        course: req.body.courseId
                    }
                    let createdCode = await ActivationCode.save(newCode)
                    break;
                case 'credit':
                    let newCode = {
                        code: code,
                        value: req.body.value
                    }
                    let createdCode = await ActivationCode.save({ code: code })
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