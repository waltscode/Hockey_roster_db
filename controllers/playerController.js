const {Player} = require('../models');

const playerController = {
    async getAllPlayers(req, res) {
        try {
            const playerData = await Player.findAll();
            res.status(200).json(playerData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getPlayerById(req, res) {
        try {
            const playerData = await Player.findByPk(req.params.id);
            if (!playerData) {
                res.status(404).json({ message: 'No player found with that id!' });
                return;
            }
            res.status(200).json(playerData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createPlayer(req, res) {
        try {
            const playerData = await Player.create(req.body);
            res.status(200).json(playerData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async updatePlayer(req, res) {
        try {
            const playerData = await Player.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            if (!playerData[0]) {
                res.status(404).json({ message: 'No player found with that id!' });
                return;
            }
            res.status(200).json(playerData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deletePlayer(req, res) {
        try {
            const playerData = await Player.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (!playerData) {
                res.status(404).json({ message: 'No player found with that id!' });
                return;
            }
            res.status(200).json(playerData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = playerController;