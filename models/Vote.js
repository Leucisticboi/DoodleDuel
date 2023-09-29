const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
    }
)