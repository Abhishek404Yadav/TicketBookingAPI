const { sequelize } = require("../config/mysqldb");
const { DataTypes } = require("sequelize"); // Use destructuring to get DataTypes from sequelize
const Movie = require('./movie.model');
const Theater = require('./theater.model');

const ShowTime = sequelize.define(
  "ShowTime",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticketsAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

// -----Association-----
// Many-to-many Relation with (Movie->Theater) using Timing
Theater.belongsToMany(Movie, {
  foreignKey: "theaterId",
  through: ShowTime,
});
// Many-to-many Relation with (Theater->Movie) using Timing
Movie.belongsToMany(Theater, {
  foreignKey: "movieId",
  through: ShowTime,
});

// Syncing Table
(async () => {
  try {
    await ShowTime.sync({ force: true });
    console.log("ShowTime table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = ShowTime;
