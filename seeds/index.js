const seedTeams = require('./teamSeeds');

const seedPlayers = require('./playerSeeds');

const seedUsers = require('./userSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({
        force: true
    });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedTeams();
    console.log('\n----- TEAMS SEEDED -----\n');
    await seedPlayers();
    console.log('\n----- PLAYERS SEEDED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    process.exit(0);
    };

seedAll();