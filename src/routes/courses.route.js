const express = require("express");
const router = express.Router();
const Course = require("../models/course");

// Retrieving existing Courses

router.get("/", (req, res) => {
  Course.find({}, (err, courses) => {
    if (err) return handleError(err);
    res.send(courses);
  });
});

// Creating new courses

router.post("/", (req, res) => {
  let courseData = req.body;
  courseData.date = new Date();
  let newCourse = new Course(courseData);

  newCourse
    .save((err, newCourse))
    .then(() => {
      res.send(newCourse);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

// Deleting an existing course

router.delete("/:id", (req, res) => {
  Course.deleteOne({ _id: req.params.id })
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
});

router.put("/:id", (req, res) => {
  let updatedCourse = req.body;
  Course.updateOne({_id: req.params.id}, updatedCourse)
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
})

module.exports = router;
