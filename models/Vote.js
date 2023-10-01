const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Prompt = require('./Prompts');

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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            references: {
                model: User,
                key: 'username'
            }
        },
        prompt_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Prompt,
                key: 'id'
            }
        },
        player_vote: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: {
                min: 1,
                max: 2,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Vote',
    }
)

module.exports = Vote;