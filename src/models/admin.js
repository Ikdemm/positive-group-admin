const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  password: String,
  phoneNumber: Number,
  photo: String
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
