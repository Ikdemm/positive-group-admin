const router = require("express").Router();
const requestsController = require("../controllers/requests.controller")

router.get("/activation-requests", requestsController.getAllActivationRequests)

router.get("/courses-requests", requestsController.getAllCoursesRequests)

module.exports = router;