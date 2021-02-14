const router = require("express").Router();
const chaptersController = require("../controllers/chapters.controller")

// Getting the list of chapters

router.get("/", chaptersController.getAllChapters)

// Adding a new chapter

router.post("/", chaptersController.createChapter)

// Update an existing chapter

router.put("/:id", chaptersController.updateChapter)

// Delete an existing chapter

router.delete("/:id", chaptersController.deleteChapter)

module.exports = router;
