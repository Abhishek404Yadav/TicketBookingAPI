const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const { Screen } = require("./screen");

const Timing = sequelize.define(
  "timing",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    time: {
      type: DataTypes.TIMESTAMP,
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
// Many to many with Screen using Seat
Timing.belongsToMany(Screen, {
  foreignKey: "timingId",
  through: { model: Seat, unique: false },
})(
  //Synching Table
  async () => {
    try {
      await Timing.sync({ force: true });
      console.log("table Added");
    } catch (error) {
      console.log("error:", error);
    }
  }
)();

module.exports = { Timing };
