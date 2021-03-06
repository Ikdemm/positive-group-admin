const Admin = require("../models/admin");
const repository = require("../repositories/base.repository");
require("dotenv").config();

module.exports = {

    // To be edited when we add CRUD for admins
    getAdminData: async (req, res) => {
        try {
            const admins = await repository.find(Admin)
            res.status(200).send(admins[0])
        }
        catch (e) {
            console.error(e);
        }
    },

    getAllAdmins: async (req, res) => {
        error
        try {
            const admins = await repository.findAll(Admin)
            res.status(200).send(admins)
        }
        catch (e) {
            console.error(e);
        }
    },

    getAdminByEmail: async (req, res) => {
        try {
            console.log(req.params.email)
            const admin = await repository.findOne({ email: req.params.email }, Admin)
            res.status(200).send(admin)
        }
        catch (e) {
            console.error(e);
        }
    },

    createAdmin: async (req, res) => {
        try {
            const user = await repository.save(req.body, Admin)
            res.status(200).send(user)
        }
        catch (e) {
            console.error(e);
        }
    },

    updateAdmin: async (req, res) => {
        try {
            const updatedAdmin = await repository.updateOne(req.params.id, req.body, Admin)
            res.status(200).send(updatedAdmin)
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteAdmin: async (req, res) => {
        try {
            const deletedAmin = await repository.delete(req.params.id, Amin)
            res.status(200).send(deletedAmin)
        }
        catch (e) {
            console.error(e);
        }
    }

}