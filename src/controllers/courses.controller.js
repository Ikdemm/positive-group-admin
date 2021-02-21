const Course = require('../models/course');
const repository = require("../repositories/base.repository");
const filesRepository = require("../repositories/files.repository")

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

    createCourse: async (req, res) => {
        try {
            const newCourse = req.body;
            const imageUrl = await filesRepository.saveFileToCloudinary("course", req.file.path, req.body.name)
            newCourse.image = imageUrl;
            const course = await repository.save(newCourse, Course)
            res.status(201).send(course)
        }
        catch (e) {
            console.error(e);
        }
    },

    updateCourse: async (req, res) => {
        try {
            const updatedCourse = req.body;
            const imageUrl = req.file ?
                await filesRepository.saveFileToCloudinary("course", req.file.path, req.body.name)
                : req.body.image;
            updatedCourse.image = imageUrl;
            const course = await repository.updateOne(req.params.id, updatedCourse, Course)
            res.status(200).send(course)
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteCourse: async (req, res) => {
        try {
            const deletedCourse = await repository.delete(req.params.id, Course)
            res.status(200).send(deletedCourse)
        }
        catch (e) {
            console.error(e);
        }
    }
}