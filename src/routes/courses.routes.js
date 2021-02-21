const router = require("express").Router();
const coursesController = require("../controllers/courses.controller");
const authenticateToken = require("../middlewares/authenticateToken");

const upload = require("../middlewares/multer")

// Retrieving existing Courses

router.get("/", coursesController.getAllCourses);

// Creating new courses

router.post("/", authenticateToken, upload.single('courseImage'), coursesController.createCourse);

// Deleting an existing course

router.delete("/:id", authenticateToken, coursesController.deleteCourse);

// Updating an existing course

router.put("/:id", authenticateToken, coursesController.updateCourse);


module.exports = router;
