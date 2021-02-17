const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const morgan = require('morgan');

const errorHandler = require('./src/middlewares/errorHandler');
const unhandledRequests = require('./src/middlewares/unhandledRequests')
const authenticateToken = require("./src/middlewares/authenticateToken")

// Using middlewares to all the requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'))

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
app.use("/api/courses", coursesRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/admin", authenticateToken, adminRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

// Use express.static for frontend
app.use('/', express.static(path.join(__dirname, 'client/dist')))

// Send back the client side
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

// Returning a 404 not found error for unsupported endpoints
app.use(unhandledRequests);
app.use(errorHandler)

module.exports = app;