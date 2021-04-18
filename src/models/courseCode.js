const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseCodeSchema = new Schema({
    code: String,
    course: { type: Syting, required: true, default: null },
    usedBy: { type: String, default: null },
});

const CourseCode = mongoose.model("CourseCode", courseCodeSchema);

module.exports = CourseCode;
