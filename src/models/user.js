const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    birthDate: Date,
    gender: String,
    job: String,
    email: String,
    password: String,
    isActivated: Boolean,
    invitees: Array,
    inviter: String,
    bonus: Number
})

const User = mongoose.model('User', userSchema)

module.exports = User;