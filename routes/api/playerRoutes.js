const {playerController: { getAllPlayers, getPlayerById, createPlayer, updatePlayer, deletePlayer }} = require('../../controllers');
const router = require('express').Router();

router.route('/').get(getAllPlayers).post(createPlayer);
router.route('/:id').get(getPlayerById).put(updatePlayer).delete(deletePlayer);

module.exports = router;