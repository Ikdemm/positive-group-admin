const router = require("express").Router();
const coursesController = require("../controllers/courses.controller")
const authenticateToken = require("../middlewares/authenticateToken");

// Retrieving existing Courses

router.get("/", coursesController.getAllCourses);

// Creating new courses

router.post("/", authenticateToken, coursesController.createCourse);

// Deleting an existing course

router.delete("/:id", authenticateToken, coursesController.deleteCourse);

// Updating an existing course

router.put("/:id", authenticateToken, coursesController.updateCourse)

// Adding a new chapter to the course

// router.put("/chapters/:courseId", (req, res) => {
//   let chapterData = req.body;
//   let courseId = req.params.courseId
//   Course.find({ _id: courseId })
//     .then((courses) => {
//       let course = courses[0];
//       course.chapters.push(chapterData);
//       Course.updateOne({ _id: courseId }, course)
//         .then(() => {
//           res.status(200).json({
//             message: "Updated!",
//           });
//         })
//         .catch((error) => {
//           console.log("cannot find: ", error)
//           res.status(400).json({
//             error: error,
//           });
//         });
//     })
//     .catch((error) => {
//       console.log("error ", error)
//       res.status(400).json({
//         error: error,
//       });
//     })
// })

module.exports = router;
