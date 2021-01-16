const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoUrl: process.env.MONGO_URL
}