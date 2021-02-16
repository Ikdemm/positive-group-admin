const Course = require('../models/course');
const repository = require("../repositories/base.repository");

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
            const course = await repository.save(req.body, Course)
            res.status(201).send(course)
        }
        catch (e) {
            console.error(e);
        }
    },

    updateCourse: async (req, res) => {
        try {
            const updatedCourse = await repository.updateOne(req.params.id, req.body, Course)
            res.status(200).send(updatedCourse)
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