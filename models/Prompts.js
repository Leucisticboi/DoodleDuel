const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prompt extends Model {}

Prompt.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'prompts',
  }
);

module.exports = Prompt;