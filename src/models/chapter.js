const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    title: String,
    description: String,
    link: String
})

const Chapter = mongoose.model('Chapter', chapterSchema)

module.exports = Chapter;