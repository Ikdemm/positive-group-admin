const Course = require('../models/course');

module.exports = {

    getAllCourses: (req, res) => {
        Course.find({}, (err, courses) => {
            if (err) return handleError(err);
            res.send(courses);
        });
    },

    createCourse: (req, res) => {
        let courseData = req.body;
        courseData.date = new Date();
        let newCourse = new Course(courseData);

        newCourse.save((newCourse))
            .then(() => {
                res.send(newCourse);
            })
            .catch((error) => {
                res.status(400).json({
                    error: error,
                });
            });
    },

    deleteCourse: (req, res) => {
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
    },

    updateCourse: (req, res) => {
        let updatedCourse = req.body;
        Course.updateOne({ _id: req.params.id }, updatedCourse)
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