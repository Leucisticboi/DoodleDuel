const router = require('express').Router();

const usernameRoutes = require('./username-routes');
const voteRoutes =require('./voteRoutes.js')

router.use('/username', usernameRoutes);
router.use('/vote', voteRoutes)

module.exports = router;