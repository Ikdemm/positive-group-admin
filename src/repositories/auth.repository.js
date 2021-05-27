require("dotenv")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const baseRepository = require("./base.repository");
const emailRepository = require("./email.repository")

module.exports = {

    login: async (data, model) => {
        try {
            /** 
             * Fetch the admin from the Database
             */
            const adminData = await baseRepository.findOne({ email: data.email }, model);
            /** 
             * Check if an admin with that email exists
             */
            if (!adminData) {
                return ({ status: 400, message: "ADMIN NOT FOUND", accessToken: null, admin: null })
            } else {
                /** 
                 * Compare the input password with the hashed password in the database
                 */
                const hashData = { email: adminData.email }
                if (await bcrypt.compare(data.password, adminData.password)) {
                    /** 
                     * Create a jwt Token and send it back to the client
                     */
                    const accessToken = jwt.sign(hashData, process.env.ACCESS_TOKEN_SECRET)
                    return ({ status: 200, message: "SUCCESS", accessToken: accessToken, admin: adminData })
                } else {

                    return ({ status: 401, message: "WRONG PASSWORD", accessToken: null, admin: null })
                }
            }
        }

        catch (err) {
            console.error(err)
        }
    },

    signup: async (data, model) => {
        try {
            let adminData = data;
            /** 
             *  Hash the password
             */
            adminData.password = await bcrypt.hash(adminData.password, 10);
            /** 
             *  Save the new admin to the database
             */
            const admin = await baseRepository.save(adminData, model);
            return ({ status: 201, message: "Created!" })
        }
        catch (e) {
            throw (e)
        }
    },

    resetPassword: async (data, model) => {
        try {
            /**
             * Fetch admin from Database
             */

            const { email } = data;
            const admin = await baseRepository.findOne({ email: email }, model);

            /**
             * Check if an admin exists with that email
             */

            if (!admin) {
                return ({ status: 500, message: "No such email" })
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
                        throw error
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });

            return ({ status: 200, message: "check your email" })

        } catch (error) {
            throw error
        }
    }
}