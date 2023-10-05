const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Duel extends Model {}

Duel.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        prompt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_name: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'duel'
    }
);

module.exports = Duel;