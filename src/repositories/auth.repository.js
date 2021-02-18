require("dotenv")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const baseRepository = require("./base.repository")

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
                return (400, { message: "ADMIN NOT FOUND" })
            } else {
                /** 
                 * Compare the input password with the hashed password in the database
                 */
                const admin = { email: adminData.email }
                if (await bcrypt.compare(req.body.password, adminData.password)) {
                    /** 
                     * Create a jwt Token and send it back to the client
                     */
                    const accessToken = jwt.sign(admin, process.env.ACCESS_TOKEN_SECRET)
                    return (200, { accessToken: accessToken })
                } else {
                    return (400, { message: "WRONG PASSWORD" })
                }
            }
        }

        catch (err) {
            throw err
        }
    },

    signup: async (req, res) => {

    }
}