const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const Theater = require('./theater.model');
const ShowTime = require("./showtime.model");

const Movie = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    runtime: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//Syncing Table
(async () => {
  try {
    await Movie.sync();
    console.log("Movie table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Movie;
