const express = require('express');
const router = express.Router();
const Course = require('../models/course');

router.post('/', (req, res) => {
    const courseData = {
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        duration: req.body.duration,
        date: new Date()
    }
    const newCourse = new Course(courseData);
    newCourse.save((err, newCourse) => {
        if (err) return handleError(err);
        res.send(newCourse)
    })
})

module.exports = router;