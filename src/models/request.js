const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    user: String,
    code: String
});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;