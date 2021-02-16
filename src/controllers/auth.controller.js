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
            if (!adminData) {
                res.status(400).send({
                    message: "ADMIN NOT FOUND",
                });
            } else {
                const admin = { email: adminData.email }
                console.log(req.body.password)
                // const password = await bcrypt.hash(req.body.password, 10)
                // console.log(await bcrypt.compare(adminData.password, req.body.password))
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
        catch (e) {
            res.status(400).json({
                error: error,
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
    }
}