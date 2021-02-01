const http = require("http");
const app = require("./app");
const db = require("./src/db");
// const { port } = require('./src/server.config');

// Importing Routes
const coursesRoutes = require("./src/routes/courses.route");
const categoriesRoutes = require("./src/routes/categories.route");
const adminRoutes = require("./src/routes/admin.route");
const chapterRoutes = require("./src/routes/chapter.route");
<<<<<<< HEAD
const userRoutes = require("./src/routes/users.route");
=======
const userRoutes = require("./src/routes/user.route");
>>>>>>> 573ee51... added users.routes with a get request

// Using Routes
app.use("/api/courses", coursesRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/users", userRoutes)

const port = process.env.PORT || "8000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`);
});
