const {teamController: {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam,
    getTeamAndPlayersById
}} = require('../../controllers');
const router = require('express').Router();

router.route('/').get(getAllTeams).post(createTeam);
router.route('/:id').get(getTeamById).put(updateTeam).delete(deleteTeam);
router.route('/:id/players').get(getTeamAndPlayersById);


module.exports = router;