const {teamController: {
    getAllTeams,
    getTeamById,
    createTeam,
    updateTeam,
    deleteTeam
}} = require('../../controllers');
const router = require('express').Router();

router.route('/').get(getAllTeams).post(createTeam);
router.route('/:id').get(getTeamById).put(updateTeam).delete(deleteTeam);



module.exports = router;