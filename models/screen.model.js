const { sequelize } = require("../config/mysqldb");
const DataTypes = require("sequelize");

const Screen = sequelize.define(
  "Screen",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true, 
    },
    name:{
      type : DataTypes.STRING,
      defaultValue : "Screen A"
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

//-----Syncing Table-----
(async () => {
  try {
    await Screen.sync({ force: true });
    console.log("Screen Table added");
  } catch (error) {
    console.log("Error:", error);
  }
})();

module.exports = Screen;
