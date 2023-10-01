const router = require('express').Router();
const { Prompt, Vote } = require('../../models');

router.patch('/', async (req, res) => {
    const winnerData = req.body.winner;
    try{
        const result = await Prompt.update(
            { winner: winnerData},
            { where: { id: req.body.id }}
        );
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const promptData = await Prompt.findByPk(req.body.id);
        if (!promptData) {
            res.status(404).json({ message: 'No prompt with that id.'});
            return;
        }
        res.status(200).json(promptData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        const promptData = await Prompt.create({
            text: req.body.text,
            p1_username: req.body.p1_username,
            p2_username: req.body.p1_username,
            active: req.body.active,
        });
        res.status(200).json(promptData);
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;