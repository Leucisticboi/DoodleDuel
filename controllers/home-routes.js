const router = require('express').Router();
const withAuth = require('../util/auth');

//home
router.get('/', withAuth, async (req, res) => {
    console.log('hit home');
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

//login
router.get('/login', async (req, res) => {
    console.log('hit login')
    if(req.session.logged_in) {
        
        res.redirect('/');
        return;
    }

    res.render('login');
})

//signup
router.get('/signup', async (req, res) => {
    res.render('signup');
})

//duel
router.get('/duel', withAuth, async (req, res) => {
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
