const Course = require('../models/course');
const repository = require("../repositories/base.repository");
const filesRepository = require("../repositories/files.repository");
const Category = require('../models/category');
const baseRepository = require('../repositories/base.repository');

module.exports = {

    getAllCourses: async (req, res) => {
        try {
            const courses = await repository.findAll(Course)
            res.status(200).send(courses)
        }
        catch (e) {
            console.error(e);
            res.status(500).send(e)
        }
    },

    createCourse: async (req, res) => {
        try {
            const newCourse = req.body;
            const imageUrl = await filesRepository.saveFileToCloudinary("course", req.file.path, req.body.name)
            newCourse.image = imageUrl;
            const course = await repository.save(newCourse, Course);
            const updatedCategory = await Category.updateOne({ name: req.body.category }, { $addToSet: { courses: [course._id] } })
            console.log(updatedCategory)
            if (updatedCategory) {
                res.status(201).send(course)
            }
        }
        catch (e) {
            console.error(e);
            res.status(500).send(e)
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
            res.status(500).send(e)
        }
    },

    deleteCourse: async (req, res) => {
        try {
            const courseId = req.params.id;
            console.log(courseId)
            const course = await baseRepository.findOneById(courseId, Course)
            await Category.findOneAndUpdate({ courses: course._id }, { $pullAll: { courses: [course._id] } })
            await repository.delete(courseId, Course)
            res.status(200).send({ message: "Deleted" })
        }
        catch (e) {
            console.error(e);
            res.status(500).send(e)
        }
    }
}