const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            layout: 'main', // Specify the layout here
            loggedIn: req.session.loggedIn,
            user: req.user,
        });
        console.log("req.user:", req.user);
    } catch (error) {
        console.error('Error fetching prompts:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
