const router = require("express").Router();
const categoriesController = require("../controllers/categories.controller")

// Retrieving existing Categories

router.get("/", categoriesController.getAllCategories);

// Creating new categories

router.post("/", categoriesController.addCategory);

// Deleting an existing category

router.delete("/:id", categoriesController.deleteCategory);

// Updating an existing category

router.put("/:id", categoriesController.updateCategory)

module.exports = router;
