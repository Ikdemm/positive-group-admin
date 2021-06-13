const Course = require('../models/course');
const repository = require("../repositories/base.repository");
const filesRepository = require("../repositories/files.repository");
const Category = require('../models/category');
const { catchAsync } = require("../helpers")

module.exports = {

    getAllCourses: catchAsync(async (req, res) => {
        const courses = await repository.findAll(Course)
        res.status(200).send(courses)
    }),

    getCourseById: catchAsync(async (req, res) => {
        const course = await repository.findOneById(req.params.courseId, Course)
        res.status(200).send(course)
    }),

    createCourse: catchAsync(async (req, res) => {
        const newCourse = req.body;
        const imageUrl = await filesRepository.saveFileToCloudinary("course", req.file.path, req.body.name)
        newCourse.image = imageUrl;
        const course = await repository.save(newCourse, Course);
        const updatedCategory = await Category.updateOne({ name: req.body.category }, { $addToSet: { courses: [course._id] } })
        if (updatedCategory) {
            res.status(201).send(course)
        }
    }),

    updateCourse: catchAsync(async (req, res) => {
        const updatedCourse = req.body;
        const imageUrl = req.file ?
            await filesRepository.saveFileToCloudinary("course", req.file.path, req.body.name)
            : req.body.image;
        updatedCourse.image = imageUrl;
        const course = await repository.updateOne(req.params.id, updatedCourse, Course)
        res.status(200).send(course)
    }),

    deleteCourse: catchAsync(async (req, res) => {
        const courseId = req.params.id;
        const course = await repository.findOneById(courseId, Course)
        await Category.findOneAndUpdate({ courses: course._id }, { $pullAll: { courses: [course._id] } })
        await repository.delete(courseId, Course)
        res.status(200).send({ message: "Deleted" })
    }),

}