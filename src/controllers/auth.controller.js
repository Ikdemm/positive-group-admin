const Admin = require("../models/admin");
const User = require("../models/user");
const repository = require("../repositories/repository");
const bcrypt = require("bcrypt");

module.exports = {
    login: async (req, res) => {
        try {
            const admin = await Admin.findOne({ email: req.body.email });
            if (admin.password === req.body.password) {
                res.send({
                    message: "SUCESS!",
                });
            } else {
                res.send({
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
            const salt = await bcrypt.genSalt() // We'll just leave the default value 10
            userData.password = await bcrypt.hash(userData.password, salt);
            const user = repository.save(user, User);
            res.status(201).send({ message: "Created!" })
        }
        catch (e) {
            console.error(e)
        }
    }
}