const Chapter = require("../models/chapter");
const repository = require("../repositories/repository")

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
}