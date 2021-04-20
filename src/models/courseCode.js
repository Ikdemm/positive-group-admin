const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseCodeSchema = new Schema({
    code: { type: String, required: true },
    course: { type: String, required: true, default: null },
    usedBy: { type: String, default: null },
    createdOn: { type: Date, default: Date.now },
    usedOn: { type: Date, default: null }
});

const CourseCode = mongoose.model("CourseCode", courseCodeSchema);

module.exports = CourseCode;
