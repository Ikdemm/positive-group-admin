const Chapter = require("../models/chapter");

module.exports = {

    getAllChapters: (req, res) => {
        Chapter.find({})
            .then((chapters) => {
                res.status(200).send(chapters)
            })
            .catch((error) => {
                res.status(400).json({
                    error: error
                });
            })
    },

    createChapter: (req, res) => {
        const chapterData = req.body;
        const newChapter = new Chapter(chapterData)
        newChapter.save(newChapter)
            .then(() => {
                res.status(200).json({
                    message: "Added!",
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error
                });
            })
    },

    updateChapter: (req, res) => {
        let updatedChapter = req.body;
        Chapter.updateOne({ _id: req.params.id }, updatedChapter)
            .then(() => {
                res.status(200).json({
                    message: "Updated!",
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error
                });
            })
    },

    deleteChapter: (req, res) => {
        Chapter.deleteOne({ _id: req.params.id })
            .then(() => {
                res.status(200).json({
                    message: "Deleted!",
                });
            })
            .catch((error) => {
                res.status(400).json({
                    error: error
                });
            })
    }
}