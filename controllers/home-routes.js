const router = require('express').Router();
const withAuth = require('../util/auth');
const Prompt = require('../models/Prompts');

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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//vote
router.get('/vote/:id', withAuth, async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.params.id);
        if(!promptData) {
            res.status(404).json({message: 'No prompt with this id!'});
            return;
        }
        const prompt = promptData.get({ plain : true });
        res.render('prompt', {
            prompt, 
            layout: 'main', 
            logged_in: req.session.logged_in, 
            user: req.user, 
            user_id: req.session.user_id,
        });
      
        console.log("req.user:", req.user);
    } catch (error) {
        console.error('Error fetching prompts:', error);
        res.status(500).send('Internal Server Error');
    }
});

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
