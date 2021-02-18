require("dotenv").config()

const Admin = require("../models/admin");
const authRepository = require('../repositories/auth.repository')

module.exports = {

    login: async (req, res) => {

        try {
            const { status, data } = await authRepository.login(req.body, Admin)
            if (status == 400) {
                res.status(status).json({ message: data })
            }
            res.status(status).json({ accessToken: data })
        }
        catch (e) {
            res.status(400).send({ error: e })
        }

    },

    signup: async (req, res) => {

        try {
            const { status, message } = await authRepository.signup(req.body, Admin)
            res.status(status).json(message)
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