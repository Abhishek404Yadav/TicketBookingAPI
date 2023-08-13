const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const Timing = require("./timing.model");
const Seat = require("./theater.model");

const Screen = sequelize.define(
  "Screen",
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
    freezeTableName: true,
    timestamps: false,
  }
);

//-----Association-----
// Many to many with (Screen->Timing) using Seat
Screen.belongsToMany(Timing, {
  foreignKey: "screenId",
  through: Seat, 
  unique: false,
});

// Many to many with (Timing->Screen) using Seat
Timing.belongsToMany(Screen, {
    foreignKey: "timingId",
    through: Seat, 
    unique: false
  });

//-----Syncing Table-----
(async () => {
  try {
    await Screen.sync({ force: true });
    console.log("Table added");
  } catch (error) {
    console.log("Error:", error);
  }
})();

module.exports = Screen;
