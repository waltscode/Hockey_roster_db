const User = require('./user');
const Player = require('./player');
const Team = require('./team');

Team.hasMany(Player, {
    foreignKey: 'player_team'
});

Player.belongsTo(Team, {
    foreignKey: 'player_team'
});

module.exports = { User, Player, Team };