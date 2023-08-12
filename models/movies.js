const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Movies = sequelize.define(
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

(async () => {
  try {
    await Movies.sync({ force: true });
    console.log("table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = { Theaters };
