const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');

const morgan = require('morgan');

const authenticateToken = require("./src/middlewares/authenticateToken")

// Using Body-Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

// Using Cross Origin middelware
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

// Importing Routes
const coursesRoutes = require("./src/routes/courses.route");
const categoriesRoutes = require("./src/routes/categories.route");
const adminRoutes = require("./src/routes/admin.route");
const chapterRoutes = require("./src/routes/chapters.route");
const userRoutes = require("./src/routes/users.route");
const authRoutes = require("./src/routes/auth.route");

// Using Routes
app.use("/api/courses", authenticateToken, coursesRoutes);
app.use("/api/categories", authenticateToken, categoriesRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

// Use express.static for frontend
app.use('/', express.static(path.join(__dirname, 'client/dist')))

// Send back the client side
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

module.exports = app;