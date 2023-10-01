const router = require('express').Router();

const userRoutes = require("./userRoutes")
const usernameRoutes = require('./username-routes');

router.use('/user', userRoutes)
router.use('/username', usernameRoutes);

module.exports = router;