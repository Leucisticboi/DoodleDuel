const router = require('express').Router();
const { Prompt } = require('../../models');

router.patch('/:id', async (req, res) => {
    const prompt = getUser(req.params.id)

    if (!prompt) return res.status(404).json(err);

    try{
        prompt.winner = req.body.winner;
        res.status(200).json(prompt);
    } catch (err) {
        res.status(500).json(err);
    }
});
//it's late i'll fix this tomorrow