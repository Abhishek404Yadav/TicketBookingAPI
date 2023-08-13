const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const Theater  = require("./theater");

const Movie = sequelize.define(
  "movie",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      PrimaryKey: true,
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
    freezeTableName: false,
    timestamps: false,
  }
);
// Many to many with Theater using Timing
Movie.belongsToMany(Theater, {
  foreignKey: "movieId",
  through: { model: Timing, unique: false },
})(
  //Synching Table
  async () => {
    try {
      await Movie.sync({ force: true });
      console.log("table Added");
    } catch (error) {
      console.log("error:", error);
    }
  }
)();

module.exports = Movie ;
