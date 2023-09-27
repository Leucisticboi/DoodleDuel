const router = require('express').Router();

const usernameRoutes = require('./username-routes');

router.use('/username', usernameRoutes);

module.exports = router;