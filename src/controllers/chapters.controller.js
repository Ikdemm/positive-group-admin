const Chapter = require("../models/chapter");
const Course = require("../models/course");
const baseRepository = require("../repositories/base.repository");
const repository = require("../repositories/base.repository")

module.exports = {

    getAllChapters: async (req, res) => {
        try {
            const chapters = await repository.findAll(Chapter)
            res.status(200).send(chapters)
        }
        catch (e) {
            console.error(e);
        }
    },

    createChapter: async (req, res) => {
        try {
            console.log(req.body)
            const chapter = await repository.save(req.body, Chapter);
            const updatedCourse = await Course.updateOne(
                { name: req.body.course },
                { $addToSet: { chapters: [chapter._id] } }
            );
            if (updatedCourse) {
                res.status(201).send(chapter)
            }
        }
        catch (e) {
            console.error(e);
        }
    },

    deleteChapter: async (req, res) => {
        try {
            const chapterId = req.params.id;
            await Course.findOneAndUpdate({ chapters: `ObjectId(${chapterId})` }, { '$pull': { chapters: [`ObjectId(${chapterId})`] } })
            await repository.delete(chapterId, Chapter)
            res.status(200).send({ message: "Deleted" })
        }
        catch (e) {
            console.error(e);
            res.status(500).send(e)
        }
    },

    updateChapter: async (req, res) => {
        try {
            const updatedChapter = await repository.updateOne(Chapter, req.params.id, req.body)
            res.status(200).send(updatedChapter)
        }
        catch (e) {
            console.error(e);
            res.status(500).send(e)
        }
    }
}