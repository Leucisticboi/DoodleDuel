const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
    {
        id: {
            type: true,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            reference: {
                model: 'user',
                key: 'username'
            }
        },
        doodle_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'doodle',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
)