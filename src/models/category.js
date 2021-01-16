const mongoose = require('mongoose')
const { Schema } = mongoose.Schema;
// const course = require("./course");

const categorySchema = new Schema({
    name: String,
    description: String,
    courses: Array
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;