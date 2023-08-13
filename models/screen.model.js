const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const Timing = require("./timing.model");
const Seat = require("./theater.model");

const Screen = sequelize.define(
  "screen",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true, 
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: false,
    timestamps: false,
  }
);

// Many to many with Timing using Seat
Screen.belongsToMany(Timing, {
  foreignKey: "screenId",
  through: { model: Seat, unique: false },
});

// Syncing Table
(async () => {
  try {
    await Screen.sync({ force: true });
    console.log("Table added");
  } catch (error) {
    console.log("Error:", error);
  }
})();

module.exports = Screen;
