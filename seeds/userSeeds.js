const {User} = require('../models');

const userData = [
    {
        "username": "test",
        "email": "      ",      
        "password": "password12345"
    },
    {
        "username": "test2",
        "email": "",
        "password": "password12345"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;