const Category = require("../models/category")

module.exports = {
    getAllCategories: (req, res) => {
        Category.find({}, (err, categories) => {
            if (err) return handleError(err);
            res.send(categories);
        });
    },
    addCategory: (req, res) => {
        const categoryData = req.body;
        // categoryData.courses = [];
        const newCategory = new Category(categoryData);
        newCategory.save((err, newCategory) => {
            if (err) return handleError(err);
            res.send(newCategory);
        });
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