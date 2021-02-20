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
        }
    },

    addCategory: async (req, res) => {
        try {
            // const path = req.file.path;
            // const categoryName = req.body.name
            const newCategory = req.body;
            const imageUrl = await filesRepository.saveFileToCloudinary(req.file.path, req.body.name)
            newCategory.image = imageUrl;
            const category = await repository.save(newCategory, Category)
            res.status(201).send(category)
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const deletedCategory = await repository.delete(req.params.id, Category)
            res.status(200).send(deletedCategory)
        }
        catch (e) {
            console.error(e);
        }
    },

    updateCategory: async (req, res) => {
        try {
            const updatedCategory = await repository.updateOne(req.params.id, req.body, Category)
            res.status(200).send(updatedCategory)
        }
        catch (e) {
            console.error(e);
        }
    }
}