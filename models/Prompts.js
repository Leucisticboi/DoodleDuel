const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prompt extends Model {}

Prompt.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    p1_username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    p2_username: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    winner: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Prompt',
  }
);

module.exports = Prompt;
