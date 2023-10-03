const router = require('express').Router();

const userRoutes = require("./userRoutes")
const usernameRoutes = require('./username-routes');
const voteRoutes = require('./voteRoutes');
const promptRoutes = require('./promptRoutes');
const saveImageRoute = require('./saveImage');


router.use('/user', userRoutes)
router.use('/username', usernameRoutes);
router.use('/vote', voteRoutes);
router.use('/prompt', promptRoutes);
router.use('/saveImage', saveImageRoute);

module.exports = router;
