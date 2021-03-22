const http = require("http");
const app = require("./app");
const db = require("./src/db");
// const { port } = require('./src/server.config');

const port = process.env.PORT || "8000";
app.set("port", 8000);

const server = http.createServer(app);

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`);
});
