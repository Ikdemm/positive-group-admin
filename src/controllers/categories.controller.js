const Category = require("../models/category");
const repository = require("../repositories/repository")

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
            const category = await repository.save(req.body, Category)
            res.status(200).send(category)
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteCategory: (req, res) => {
        Category.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    message: "Deleted!",
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error,
                });
            });
    },

    updateCategory: (req, res) => {
        let updatedCategory = req.body;
        Category.updateOne({ _id: req.params.id }, updatedCategory)
            .then(() => {
                res.status(200).json({
                    message: "Updated!",
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error,
                });
            });
    }
}