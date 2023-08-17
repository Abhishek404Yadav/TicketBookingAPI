const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const ShowTime = require("./showtime.model");
const Screen = require('./screen.model');

const Seat = sequelize.define(
  "Seat",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    row: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
//-----Association-----
// Many to many with (Screen->Timing) using Seat
Screen.belongsToMany(ShowTime, {
  foreignKey: "screenId",
  through: Seat, 
  unique: false,
});

// Many to many with (Timing->Screen) using Seat
ShowTime.belongsToMany(Screen, {
    foreignKey: "timingId",
    through: Seat, 
    unique: false
  });
//Syncing Table
(async () => {
  try {
    await Seat.sync({ force: true });
    console.log("Seat table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Seat;
