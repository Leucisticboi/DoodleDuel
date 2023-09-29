const router = require('express').Router();
const Prompt = require('../models/Prompts');

router.get('/', async (req, res) => {
    try {
        const activePrompts = await Prompt.findAll({ attributes: ['text'] });
        const votePrompts = await Prompt.findAll({ attributes: ['text'] });


        res.render('prompts', {
            activePrompts,
            votePrompts,
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        console.error('Error fetching prompts:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;