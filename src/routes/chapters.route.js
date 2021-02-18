const router = require("express").Router();
const chaptersController = require("../controllers/chapters.controller");
const authenticateToken = require("../middlewares/authenticateToken");

// Getting the list of chapters

router.get("/", authenticateToken, chaptersController.getAllChapters)

// Adding a new chapter

router.post("/", authenticateToken, chaptersController.createChapter)

// Update an existing chapter

router.put("/:id", authenticateToken, chaptersController.updateChapter)

// Delete an existing chapter

router.delete("/:id", authenticateToken, chaptersController.deleteChapter)


module.exports = router;
