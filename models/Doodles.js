const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
