const {User} = require('../models');

const userController = {
    async getAllUsers(req, res) {
        try {
            const userData = await User.findAll();
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getUserById(req, res) {
        try {
            const userData = await User.findByPk(req.session.user_id);
            if (!userData) {
                res.status(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;
                res.status(200).json(userData);
            });
            
        } catch (err) {
            res.status(400).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const userData = await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            if (!userData[0]) {
                res.status(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const userData = await User.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (!userData) {
                res.status(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async login(req, res) {
        try {
            const userData = await User.findOne({ where: { username: req.body.username } });
            if (!userData) {
                res.status(400).json({ message: 'Incorrect username or password, please try again' });
                return;
            }
            const validPassword = await userData.checkPassword(req.body.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect username or password, please try again' });
                return;
            }
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.loggedIn = true;
                res.json({ user: userData, message: 'You are now logged in!' });
            });
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async logout(req, res) {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    }

};


// can be changed later to jsonwebtoken if choose to use that instead of sessions   

module.exports = userController;