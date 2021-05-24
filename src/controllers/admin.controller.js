const Admin = require("../models/admin");
const repository = require("../repositories/base.repository");
const { catchAsync } = require("../helpers")
require("dotenv").config();

module.exports = {

    // To be edited when we add CRUD for admins
    getAdminData: catchAsync(async (req, res) => {
        const admins = await repository.find(Admin)
        res.status(200).send(admins[0])
    }),

    getAllAdmins: catchAsync(async (req, res) => {
        const admins = await repository.findAll(Admin)
        res.status(200).send(admins)
    }),

    getAdminByEmail: catchAsync(async (req, res) => {
        console.log(req.params.email)
        const admin = await repository.findOne({ email: req.params.email }, Admin)
        res.status(200).send(admin)
    }),

    createAdmin: catchAsync(async (req, res) => {
        const user = await repository.save(req.body, Admin)
        res.status(200).send(user)
    }),

    updateAdmin: catchAsync(async (req, res) => {
        const updatedAdmin = await repository.updateOne(req.params.id, req.body, Admin)
        res.status(200).send(updatedAdmin)
    }),

    deleteAdmin: catchAsync(async (req, res) => {
        const deletedAmin = await repository.delete(req.params.id, Amin)
        res.status(200).send(deletedAmin)
    })

}