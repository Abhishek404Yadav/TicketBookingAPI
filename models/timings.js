const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Timings = sequelize.define(
  "timing",
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

(async () => {
  try {
    await Timings.sync({ force: true });
    console.log("table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = { Timings };
