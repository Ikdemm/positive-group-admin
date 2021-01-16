const mongoose = require('mongoose');
const dbconfig = require("../config/database.config");

mongoose.connect(dbconfig.mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Successfuly connected to the databse"));

module.exports = db;

