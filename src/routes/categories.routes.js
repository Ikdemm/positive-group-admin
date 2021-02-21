const router = require("express").Router();
const categoriesController = require("../controllers/categories.controller");
const authenticateToken = require("../middlewares/authenticateToken");

const upload = require("../middlewares/multer")

// Retrieving existing Categories

router.get("/", categoriesController.getAllCategories);

// Creating new categories

router.post("/", authenticateToken, upload.single('categoryImage'), categoriesController.addCategory);

// Deleting an existing category

router.delete("/:id", authenticateToken, categoriesController.deleteCategory);

// Updating an existing category

router.put("/:id", authenticateToken, categoriesController.updateCategory);


module.exports = router;