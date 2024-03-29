const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Player extends Model {}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        player_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        player_position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        player_height: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        player_college: {
            type: DataTypes.STRING,
            allowNull: false
        },
        player_team: {
            type: DataTypes.INTEGER,
            references: {
                model: 'team', //modelName from the the team model
                key: 'id'
            }
        },
        player_salary: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'player'
    }
);

module.exports = Player;