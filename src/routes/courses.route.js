const express = require("express");
const router = express.Router();
const Course = require("../models/course");
const coursesController = require("../controllers/courses.controller")

// Retrieving existing Courses

router.get("/", coursesController.getAllCourses);

// Creating new courses

router.post("/", coursesController.createCourse);

// Deleting an existing course

router.delete("/:id", coursesController.deleteCourse);

// Updating an existing course

router.put("/:id", coursesController.updateCourse)

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
