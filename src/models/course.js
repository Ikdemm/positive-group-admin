const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: String,
    duration: Number,
    createdOn: Date,
    price: { type: Number, default: 0 },
    chapters: { type: Array, default: [] },
    codes: { type: [String], default: [] }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;