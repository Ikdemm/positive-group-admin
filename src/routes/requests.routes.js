const router = require("express").Router();
const requestsController = require("../controllers/requests.controller")

router.get("/", requestsController.getAllRequests)
router.post("/:userId/:courseId", requestsController.requestCourse)