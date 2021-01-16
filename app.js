const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const db = require("./src/db")
//routes 
// const authorsRoutes = require('./api/routes/authors');



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

// Send back the server side
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

module.exports = app;