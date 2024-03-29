const router = require('express').Router();
const playerRoutes = require('./playerRoutes');
const teamRoutes = require('./teamRoutes');
const fantasyRoutes = require('./fantasyRoutes');
const userRoutes = require('./userRoutes');

router.use('/players', playerRoutes);

router.use('/teams', teamRoutes);

router.use('/fantasy', fantasyRoutes);

router.use('/users', userRoutes);




module.exports = router;