const {userController: {getAllUsers, getUserById, createUser, updateUser, deleteUser, login, logout}} = require('../../controllers');
const router = require('express').Router();

router.route('/login').post(login);
router.route('/logout').post(logout);
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);



module.exports = router;
