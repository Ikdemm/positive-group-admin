const authenticateToken = require("./authenticateToken")
const multer = require("./multer")
const errorHandler = require("./errorHandler")
const cors = require("./cors.middleware")
const unhandledRequests = require("./unhandledRequests")

module.exports = {
    authenticateToken,
    multer,
    errorHandler,
    cors,
    unhandledRequests
}