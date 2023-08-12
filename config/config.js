const dotenv = require("dotenv"); // loads environment variables from .env file
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../.env") });

module.exports = {
  // port: process.env.PORT,
  sqlDbName: process.env.SQL_DB_NAME,
  sqlDbUsername: process.env.SQL_DB_USERNAME,
  sqlDbPassword: process.env.SQL_DB_PASSWORD,
};