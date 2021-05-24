const Category = require("../models/category");
const repository = require("../repositories/base.repository");
const filesRepository = require("../repositories/files.repository");
const { catchAsync } = require("../helpers")

module.exports = {

    getAllCategories: catchAsync(async (req, res) => {
        const categories = await repository.findAll(Category)
        res.status(200).send(categories)
    }),

    addCategory: catchAsync(async (req, res) => {
        const imageUrl = await filesRepository.saveFileToCloudinary("category", req.file.path, req.body.name);
        let newCategory = req.body;
        newCategory.image = imageUrl;
        const category = await repository.save(newCategory, Category)
        res.status(200).send(category)
    }),

    deleteCategory: catchAsync(async (req, res) => {
        const deletedCategory = await repository.delete(req.params.id, Category)
        res.status(200).send(deletedCategory)
    }),

    updateCategory: catchAsync(async (req, res) => {
        const updatedCategory = req.body;
        const imageUrl = req.file ?
            await filesRepository.saveFileToCloudinary("category", req.file.path, req.body.name)
            : req.body.image;
        updatedCategory.image = imageUrl;
        const category = await repository.updateOne(Category, req.params.id, updatedCategory)
        res.status(200).send(category)
    })
}