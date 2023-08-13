const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");


const Timing = sequelize.define(
  "Timing",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    time: {
      type: DataTypes.DATE,
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

//Syncing Table
(async () => {
  try {
    await Timing.sync({ force: true });
    console.log("Timing table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = Timing;
