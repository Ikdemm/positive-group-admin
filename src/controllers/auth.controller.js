require("dotenv").config()

const Admin = require("../models/admin");
const authRepository = require('../repositories/auth.repository')

module.exports = {

    login: async (req, res) => {

        try {
            const { status, message, accessToken, admin } = await authRepository.login(req.body, Admin)
            console.log(status, message, accessToken, admin)
            if (status == 200) res.status(status).send({ accessToken: accessToken, admin: admin })
            res.status(status).send({ message: message })
        }
        catch (error) {
            console.error(error)
            res.status(400).send({ error: error })
        }

    },

    signup: async (req, res) => {

        try {
            const { status, message } = await authRepository.signup(req.body, Admin)
            res.status(status).send(message)
        }
        catch (e) {
            res.status(500).send({ error: e })
        }

    },

    forgotPassword: async (req, res) => {
        try {
            const { status, message } = await authRepository.resetPassword(req.body, Admin)
            res.status(status).json(message)
        }
        catch (e) {
            res.status(500).send({ error: e })
        }

    }
}