const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: String,
    category: String,
    description: String,
    duration: Number,
    createdOn: Date,
    chapters: Array,
    photo: String
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course;