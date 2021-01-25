const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    title: String,
    description: String,
    video: String,
    course: String,
    category: String
})

const Chapter = mongoose.model('Chapter', chapterSchema)

module.exports = Chapter;