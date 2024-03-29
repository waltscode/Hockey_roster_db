require ("dotenv").config();
const Sequelize = require('sequelize'); //import sequelize`
let sequelize; //declare sequelize variable

//JAWDB IS USED IF ON HEROKU
if (process.env.DB_URL) { //if the JAWSDB_URL exists, then create a new sequelize connection to the JawsDB database
    sequelize = new Sequelize(process.env.DB_URL);
} else { //if the JAWSDB_URL does not exist, then create a new sequelize connection to the local database
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize; //export the sequelize connection to be used in the server.js file