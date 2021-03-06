const Category = require("../models/category");
const repository = require("../repositories/base.repository");
const filesRepository = require("../repositories/files.repository")

module.exports = {

    getAllCategories: async (req, res) => {
        try {
            const categories = await repository.findAll(Category)
            res.status(200).send(categories)
        }
        catch (e) {
            console.error(e);
            res.status(400).send(e)
        }
    },

    addCategory: async (req, res) => {
        try {
            const imageUrl = await filesRepository.saveFileToCloudinary("category", req.file.path, req.body.name);
            let newCategory = req.body;
            newCategory.image = imageUrl;
            const category = await repository.save(newCategory, Category)
            res.status(201).send(category)
        }
        catch (e) {
            console.error(e);
            res.status(400).send(e)
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const deletedCategory = await repository.delete(req.params.id, Category)
            res.status(200).send(deletedCategory)
        }
        catch (e) {
            console.error(e);
            res.status(400).send(e)
        }
    },

    updateCategory: async (req, res) => {
        try {
            const updatedCategory = req.body;
            const imageUrl = req.file ?
                await filesRepository.saveFileToCloudinary("category", req.file.path, req.body.name)
                : req.body.image;
            updatedCategory.image = imageUrl;
            const category = await repository.updateOne(Category, req.params.id, updatedCategory)
            res.status(200).send(category)
        }
        catch (e) {
            console.error(e);
            res.status(400).send(e)
        }
    }
}