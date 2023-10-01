const router = require('express').Router();
const { Vote } = require('../../models');

router.post("/", async (req, res) => {
    try {
        const voteData = await Vote.create({
            username: req.body.username,
            prompt_id: req.body.prompt_id,
            player_vote: req.body.player_vote,
        });
        res.status(200).json(voteData)
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;