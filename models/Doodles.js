const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Prompt = require('./Prompts');

class Doodle extends Model {}

Doodle.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    prompt_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Prompt,
          key: 'id'
      }
    },
    file_ref: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'doodles',
  }
);

module.exports = Doodle;
