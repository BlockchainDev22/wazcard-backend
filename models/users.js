"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.cards, { foreignKey: "id" })
    }
  }
  users.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      resetCode: {
        type: DataTypes.INTEGER,
      },
      emailVerified: {
        type: DataTypes.BOOLEAN,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "active",
      },
      avatar: {
        type: DataTypes.STRING,
      },
      avatar_public_id: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "users",
    },
  )
  return users
}
