require("dotenv").config()

const Admin = require("../models/admin");
const authRepository = require('../repositories/auth.repository');
const { catchAsync } = require("../helpers")

module.exports = {

    login: catchAsync(async (req, res) => {
        const { status, message, accessToken, admin } = await authRepository.login(req.body, Admin)
        if (status == 200) res.status(status).send({ accessToken: accessToken, admin: admin })
        if (status !== 200) res.status(status).send({ message: message })

    }),

    signup: catchAsync(async (req, res) => {
        const { status, message } = await authRepository.signup(req.body, Admin)
        res.status(status).send(message)
    }),

    forgotPassword: catchAsync(async (req, res) => {
        const { status, message } = await authRepository.resetPassword(req.body, Admin)
        res.status(status).json(message)
    })
}