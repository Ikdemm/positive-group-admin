const Chapter = require("../models/chapter");
const Course = require("../models/course");
const repository = require("../repositories/base.repository");
const { catchAsync } = require("../helpers")

module.exports = {

    getAllChapters: catchAsync(async (req, res) => {
        const chapters = await repository.findAll(Chapter)
        res.status(200).send(chapters)
    }),

    createChapter: catchAsync(async (req, res) => {
        const chapter = await repository.save(req.body, Chapter);
        await Course.updateOne(
            { name: req.body.course },
            { $addToSet: { chapters: [chapter._id] } }
        );
        res.status(201).send(chapter)
    }),

    deleteChapter: catchAsync(async (req, res) => {
        const chapterId = req.params.id;
        const chapter = await repository.findOneById(req.params.id, Chapter)
        await Course.findOneAndUpdate({ chapters: chapter._id }, { $pullAll: { chapters: [chapter._id] } })
        await repository.delete(chapterId, Chapter)
        res.status(200).send({ message: "Deleted" })
    }),

    updateChapter: catchAsync(async (req, res) => {
        const updatedChapter = await repository.updateOne(Chapter, req.params.id, req.body)
        res.status(200).send(updatedChapter)
    })
}