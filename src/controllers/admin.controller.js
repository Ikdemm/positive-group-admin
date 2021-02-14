const Admin = require("../models/admin");

module.exports = {

    getAdminData: async (req, res) => {
        try {
            const adminData = await Admin.find({});
            res.send(adminData[0]);
        } catch (e) {
            console.error(e);
        }
    },

    updateAdmin: async (req, res) => {
        try {
            const newData = await Admin.updateOne(
                { firstName: req.body.oldName },
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    emai: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                }
            );
            res.send(newData);
        } catch (e) {
            console.error(e);
        }
    }
}