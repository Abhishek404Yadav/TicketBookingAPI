const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Movie = require("./movie.model");
const ShowTime = require("./showtime.model");

const Theater = sequelize.define(
  "Theater",
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
//------Syncing Table-------
(async () => {
  try {
    await Theater.sync();
    console.log("Theater table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Theater;
