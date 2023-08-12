const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Theaters = sequelize.define(
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

(async () => {
  try {
    await Theaters.sync({ force: true });
    console.log("table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = { Theaters };
