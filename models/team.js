const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Team extends Model {}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_coach: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team_division: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'team' // this is the name being reference for foreign keys 
    }
);

module.exports = Team;