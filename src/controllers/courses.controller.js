const Course = require('../models/course');

module.exports = {

    getAllCourses: async (req, res) => {
        try {
            const courses = await repository.findAll(Course)
            res.status(200).send(courses)
        }
        catch (e) {
            console.error(e);
        }
    },

    createChapter: async (req, res) => {
        try {
            const chapter = await repository.save(req.body, Chapter)
            res.status(200).send(chapter)
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteChapter: async (req, res) => {
        try {
            const deletedChapter = await repository.delete(req.params.id, Chapter)
            res.status(200).send(deletedChapter)
        }
        catch (e) {
            console.error(e);
        }
    },

    updateChapter: async (req, res) => {
        try {
            const updatedChapter = await repository.updateOne(req.params.id, req.body, Chapter)
            res.status(200).send(updatedChapter)
        }
        catch (e) {
            console.error(e);
        }
    }
    
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