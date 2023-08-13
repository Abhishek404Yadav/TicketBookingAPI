const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const  Timing  = require("./timing");
const  Seat  = require("./theater");

const Screen = sequelize.define(
  "screen",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      PrimaryKey: true,
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
})(
  //Synching Table
  async () => {
    try {
      await Screen.sync({ force: true });
      console.log("table Added");
    } catch (error) {
      console.log("error:", error);
    }
  }
)();

module.exports = Screen;
