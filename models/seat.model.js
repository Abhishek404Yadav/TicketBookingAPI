const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Seat = sequelize.define(
  "Seat",
  {
    seatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    isBooked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    await Seat.sync({ force: true });
    console.log("Seat table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Seat;
