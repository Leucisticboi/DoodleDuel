const router = require('express').Router();
const { User, Stats } = require('../../models');

router.get('/:username', async (req, res) => {
    try {
        const userData = await User.findByPk(req.body.username, {
            include: [{ model: Stats }],
        });
        if (!userData) {
            res.status(404).json({ message: 'No user with that username.'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

