const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUrl = require('./src/config/database.config.js');
const bodyParser = require('body-parser');
const path = require('path')

//routes 
// const authorsRoutes = require('./api/routes/authors');

// mongoose.connect(mongoUrl)
// .then(console.log("Successfuly connected to the Database"));
// mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

// app.use('/authors', authorsRoutes);

// Use express.static for frontend
app.use('/', express.static(path.join(__dirname, 'client/dist')))

// Send back the 
app.get('/', (req, res) => {
  express.static(path.join(__dirname, 'client/dist'));
})

module.exports = app;