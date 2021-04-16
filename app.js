require("dotenv")

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const errorHandler = require('./src/middlewares/errorHandler');
const unhandledRequests = require('./src/middlewares/unhandledRequests')
const authenticateToken = require("./src/middlewares/authenticateToken")

const { unless } = require("./src/helpers")

// Using middlewares to all the requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))

/*
  Using Cross Origin middelware
**/

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

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


/* 
  Importing Routes
**/

const routes = require("./src/routes")

/*
  Using Routes
**/

app.use("/api", routes)

/**
 * Static
 */

const _clientDir = "client/dist/ng/browser";


app.use('/', express.static(path.resolve(__dirname, `${_clientDir}/`)));

/**
 * Spa Res Sender
 */
const renderIndex = (req, res) => {
  res.sendFile(path.resolve(__dirname, `${_clientDir}/index.html`));
};

/**
 * Prevent server routing and use @ng2-router.
 */
app.get(unless('/api-docs'), renderIndex);

/**
 * API Documentation with Swagger.
 */
const swaggerUi = require("swagger-ui-express"),
  YAML = require("yamljs")
swaggerDocument = YAML.load("./swagger.yaml");

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Returning a 404 not found error for unsupported endpoints
app.use(unhandledRequests);
app.use(errorHandler)

module.exports = app;