const router = require("express").Router();
const categoriesController = require("../controllers/categories.controller");
const authenticateToken = require("../middlewares/authenticateToken");

const multer = require('multer');
const { callbackPromise } = require("nodemailer/lib/shared");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, req.body.name + "." + ext)
    }
})

/* 
    File filter to only accept images
**/

const fileFilter = (req, file, cb) => {
    // accept image files
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // Reject other types of files
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

// Retrieving existing Categories

router.get("/", categoriesController.getAllCategories);

// Creating new categories

router.post("/", authenticateToken, upload.single('categoryImage'), categoriesController.addCategory);

// Deleting an existing category

router.delete("/:id", authenticateToken, categoriesController.deleteCategory);

// Updating an existing category

router.put("/:id", authenticateToken, categoriesController.updateCategory);


module.exports = router;