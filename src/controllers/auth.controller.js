require("dotenv").config()

const Admin = require("../models/admin");
const User = require("../models/user");
const repository = require("../repositories/base.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports = {

    adminLogin: async (req, res) => {
        try {
            const adminData = await repository.findOne({ email: req.body.email }, Admin);
            console.log(adminData)
            if (!adminData) {
                res.status(400).send({
                    message: "ADMIN NOT FOUND",
                });
            } else {
                const admin = { email: adminData.email }
                if (await bcrypt.compare(req.body.password, adminData.password)) {
                    const accessToken = jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET)
                    res.status(200).json({
                        accessToken: accessToken,
                    });
                } else {
                    res.send({
                        message: "WRONG PASSWORD",
                    });
                }
            }

        }
        catch (err) {
            console.log(err)
            res.status(400).json({
                error: err,
            });
        }
    },

    adminSignup: async (req, res) => {
        try {
            let adminData = req.body;
            adminData.password = await bcrypt.hash(adminData.password, 10);
            const admin = await repository.save(adminData, Admin);
            res.status(201).send({ message: "Created!" })
        }
        catch (e) {
            console.error(e)
            res.status(500).send()
        }
    },

    login: async (req, res) => {
        try {
            const userData = await repository.findOne({ email: req.body.email }, User);
            const user = { email: userData.email }

            if (await bcrypt.compare(userData.password, req.body.password)) {
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                res.status(200).json({
                    accessToken: accessToken,
                });
            } else {
                res.status(405).send({
                    message: "WRONG PASSWORD",
                });
            }
        }
        catch (e) {
            res.status(400).json({
                error: error,
            });
        }
    },

    signup: async (req, res) => {
        try {
            let userData = req.body;
            userData.password = await bcrypt.hash(userData.password, 10);
            const user = await repository.save(userData, User);
            res.status(201).send({ message: "Created!" })
        }
        catch (e) {
            console.error(e)
            res.status(500).send()
        }
    },

    forgotPassword: async (req, res) => {
        // Fetch admin from Database
        const { email } = req.body;
        const admin = await repository.findOne({ email: email }, Admin);

        if (!admin) {
            res.status(500).json({ message: "No such email" })
        }

        // Create a one time link valid for 15 minutes
        const secret = process.env.ACCESS_TOKEN_SECRET + email;
        const payload = {
            email: admin.email,
            id: admin._id
        }
        const token = jwt.sign(payload, secret, { expiresIn: '15m' })
        const link = `http://localhost:8000/reset-password/${admin._id}/${token}`
        console.log(link)
        res.send(link)
    }
}