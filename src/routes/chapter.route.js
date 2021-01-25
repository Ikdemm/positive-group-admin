const express = require("express");
const router = express.Router();
const Chapter = require("../models/chapter");

// Adding a new chapter to an existing course

router.post("/", (req, res) => {
    const chapterData = req.body;
    const newChapter = new Chapter(chapterData)
    newChapter.save(newChapter)
        .then((chapter) => {
            res.status(200).json({
                message: "Added!",
            });
        })
        .catch((error) => {
            res.status(400).json({
                error: error
            });
        })
})


module.exports = router;
