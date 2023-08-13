const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");
const { Timing } = require("./timing");

const Theater = sequelize.define(
  "theater",
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
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: false,
    timestamps: false,
  }
);
// Many to many with Movie using Timing
Theater.belongsToMany(Movie, {
  foreignKey: "theaterId",
  through: { model: Timing, unique: false },
})(
  //Synching Table
  async () => {
    try {
      await Theater.sync({ force: true });
      console.log("table Added");
    } catch (error) {
      console.log("error:", error);
    }
  }
)();

module.exports = { Theater };
