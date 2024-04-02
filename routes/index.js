const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes); // all api routes start with /api




module.exports = router;