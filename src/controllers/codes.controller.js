const ActivationCode = require("../models/activationCode");
const CreditCode = require("../models/creditCode");
const codeGenerator = require("../helpers/codesGenerator");
const CourseCode = require("../models/courseCode");
const Course = require("../models/course");
const { catchAsync } = require("../helpers")

module.exports = {

    generateCode: catchAsync(async (req, res) => {
        let createdCode = null;
        let newCode = null;
        let code = codeGenerator();
        switch (req.body.codeType) {
            case 'activation':
                createdCode = await ActivationCode.create(code)
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
    }),

    getActivationCodes: catchAsync(async (req, res) => {
        let activationCodes = await ActivationCode.find({})
        res.status(200).send(activationCodes)
    }),

    getCoursesCodes: catchAsync(async (req, res) => {
        let coursesCodes = await CourseCode.find({})
        res.status(200).send(coursesCodes)
    }),

    getCreditCodes: catchAsync(async (req, res) => {
        let creditCodes = await CreditCode.find({})
        res.status(200).send(creditCodes)
    }),

    deleteCourseCode: catchAsync(async (req, res) => {
        await CourseCode.deleteOne({ _id: req.params.codeId })
        res.status(200).send({ message: "Deleted" })
    }),

    deleteActivationCode: catchAsync(async (req, res) => {
        await ActivationCode.deleteOne({ _id: req.params.codeId })
        res.status(200).send({ message: "Deleted" })
    }),

    deleteCreditCode: catchAsync(async (req, res) => {
        await CreditCode.deleteOne({ _id: req.params.codeId })
        res.status(200).send({ message: "Deleted" })
    })
}