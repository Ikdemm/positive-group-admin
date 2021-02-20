require("dotenv").config()

const Admin = require("../models/admin");
const authRepository = require('../repositories/auth.repository')

module.exports = {

    login: async (req, res) => {

        try {
            const { status, accessToken } = await authRepository.login(req.body, Admin)
            if (status == 400) {
                res.status(400).json({ message: "ADMIN NOT FOUND" })
            } else if (status == 401) {
                res.status(401).json({ message: "WRONG PASSWORD" })
            }
            res.status(200).json({ accessToken: accessToken })
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