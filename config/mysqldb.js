const Sequelize= require('sequelize');
const config = require('./config');

const DATABASE = config.sqlDbName;
const USERNAME = config.sqlDbUsername;
const PASSWORD = config.sqlDbPassword;
const HOST = "localhost";

const sequelize = new Sequelize(DATABASE,USERNAME, PASSWORD,{
    dialect : "mysql",
    host : HOST,
    pool : {
        max: 10,
        min : 0,
        idle : 10000,
    }
});

const connectToSqlDb = async function () {
    try {
      await sequelize.authenticate();
      console.log("Successfully connected to mysql database");
    } catch (error) {
      console.log("Error connecting to database: " + error);
    }
  };
module.exports = {
    sequelize,
    connectToSqlDb
};