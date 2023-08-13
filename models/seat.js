const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Seat = sequelize.define(
  "Seat",
  {
    seatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isBooked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    freezeTableName: false,
    timestamps: false,
  }
);
//Synching Table
(async () => {
  try {
    await Theater.sync({ force: true });
    console.log("table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Seat;
