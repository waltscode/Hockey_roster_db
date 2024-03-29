const express = require('express');
const sequelize = require('./config/connection.js');  //acquire the path to the connection.js file
const path = require('path');
const session = require('express-session');
const routes = require('./routes');
const SequelizeStore = require('connect-session-sequelize')(session.Store); //creates session with db connection and stores it in the db temporarily until the session is over


const app = express();
const PORT = 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 3600000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json()); //parse incoming JSON data
app.use(express.urlencoded({ extended: true })); //parse incoming form data

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening')); //once synced with db turn on the server
});