const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            layout: 'main', // Specify the layout here
            logged_in: req.session.logged_in,
            user: req.user,
        });
        console.log("req.user:", req.user);
    } catch (error) {
        console.error('Error fetching prompts:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/duel', async (req, res) => {
    try {
        res.render('duel', {
            layout: 'main', // Specify the layout here
            logged_in: req.session.logged_in,
            user: req.user,
        });
        console.log("req.user:", req.user);
    } catch (error) {
        console.error('Error fetching prompts:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
