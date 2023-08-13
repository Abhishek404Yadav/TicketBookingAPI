const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const Timing = require("./timing.model");
const Movie = require("./movie.model");

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
    freezeTableName: false,
    timestamps: false,
  }
);

//-----Association-----
// Many to many Relation with (Movie->Theater) using Timing
Theater.belongsToMany(Movie, {
  foreignKey: "theaterId",
  through: Timing,
  unique: false,
});
// Many to many Relation with (Theater->Movie) using Timing
Movie.belongsToMany(Theater, {
  foreignKey: "movieId",
  through: Timing,
  unique: false,
});

//------Syncing Table-------
(async () => {
  try {
    await Theater.sync({ force: true });
    console.log("Theater table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Theater;
