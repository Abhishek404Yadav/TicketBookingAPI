const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Screens = sequelize.define(
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

Theatre.hasMany(Screen, {
  foreignKey: "theatreId",
  as: "screens",
});

Screen.belongsTo(Theatre, {
  foreignKey: "theatreId",
});

(async () => {
  try {
    await Screens.sync({ force: true });
    console.log("table Added");
  } catch (error) {
    console.log("error:", error);
  }
})();

module.exports = { Theaters };
