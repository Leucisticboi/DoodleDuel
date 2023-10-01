const router = require('express').Router();

const usernameRoutes = require('./username-routes.js');
const voteRoutes = require('./voteRoutes.js');
const promptRoutes = require('./promptRoutes.js');

router.use('/username', usernameRoutes);
router.use('/vote', voteRoutes);
router.use('/prompt', promptRoutes);

module.exports = router;
