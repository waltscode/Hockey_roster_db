const {Team} = require('../models');

const teamController = {
    async getAllTeams(req, res) {
        try {
            const teamData = await Team.findAll();
            res.status(200).json(teamData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getTeamById(req, res) {
        try {
            const teamData = await Team.findByPk(req.params.id);
            if (!teamData) {
                res.status(404).json({ message: 'No team found with that id!' });
                return;
            }
            res.status(200).json(teamData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createTeam(req, res) {
        try {
            const teamData = await Team.create(req.body);
            res.status(200).json(teamData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async updateTeam(req, res) {
        try {
            const teamData = await Team.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            if (!teamData[0]) {
                res.status(404).json({ message: 'No team found with that id!' });
                return;
            }
            res.status(200).json(teamData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteTeam(req, res) {
        try {
            const teamData = await Team.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (!teamData) {
                res.status(404).json({ message: 'No team found with that id!' });
                return;
            }
            res.status(200).json(teamData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = teamController;


