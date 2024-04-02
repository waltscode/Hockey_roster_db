const {Player} = require('../models');

const playerData = [
    { player_name: 'LeBron James', player_number: 23, player_position: 'SF', player_age: 36, player_height: '6-9', player_weight: 250, player_college: 'St. Vincent-St. Mary HS (OH)', player_team: 1, player_salary: 39219565 },

    { player_name: 'Anthony Davis', player_number: 3, player_position: 'PF', player_age: 28, player_height: '6-10', player_weight: 253, player_college: 'Kentucky', player_team: 1, player_salary: 32742000 },

    { player_name: 'Stephen Curry', player_number: 30, player_position: 'PG', player_age: 33, player_height: '6-3', player_weight: 185, player_college: 'Davidson', player_team: 2, player_salary: 43006362 },

    { player_name: 'Klay Thompson', player_number: 11, player_position: 'SG', player_age: 31, player_height: '6-6', player_weight: 215, player_college: 'Washington State', player_team: 2, player_salary: 35573500 },

    { player_name: 'Kawhi Leonard', player_number: 2, player_position: 'SF', player_age: 30, player_height: '6-7', player_weight: 225, player_college: 'San Diego State', player_team: 3, player_salary: 34449964 },

    { player_name: 'Paul George', player_number: 13, player_position: 'SF', player_age: 31, player_height: '6-8', player_weight: 220, player_college: 'Fresno State', player_team: 3, player_salary: 35450412 },

    { player_name: 'Devin Booker', player_number: 1, player_position: 'SG', player_age: 24, player_height: '6-5', player_weight: 206, player_college: 'Kentucky', player_team: 4, player_salary: 29475354 },

];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;

