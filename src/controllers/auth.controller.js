require("dotenv").config()

const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const repository = require("../repositories/base.repository");
const emailRepository = require('../repositories/email.repository');
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
            /**
             * Fetch admin from Database
             */

            const { email } = req.body;
            const admin = await repository.findOne({ email: email }, Admin);

            /**
             * Check if an admin exists with that email
             */

            if (!admin) {
                res.status(500).json({ message: "No such email" })
            }

            /**
             * Create a one time link valid for 15 minutes
             */

            const secret = process.env.ACCESS_TOKEN_SECRET + email;
            const payload = {
                email: admin.email,
                id: admin._id
            }
            const token = jwt.sign(payload, secret, { expiresIn: '15m' })
            const link = `http://localhost:8000/reset-password/${admin._id}/${token}`

            /**
             * Send the link to the user via email
             */

            emailRepository.sendEmail(admin.email, "Password Reset", link)
                .then((error, info) => {
                    if (error) {
                        res.send(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

            res.status(200).send("check your email")

        } catch (error) {
            res.send(error)
        }

    }
}