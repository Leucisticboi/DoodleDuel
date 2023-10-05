const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Doodle extends Model {}


Doodle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        doodle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parent_duel: {
            reference: {
                model: 'duel',
                key: 'id'
            }
        },
        user_name: {
            reference: {
                model: 'user',
                key: 'username'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true
    }
);

module.exports = Opponent;