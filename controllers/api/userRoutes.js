const router = require('express').Router();
const { User } = require('../../models');

//new user
router.post('/signup', async (req, res) => {
    try {
        if(req.body.password !== req.body.confirmPassword) {
            res.status(400).json({ message: 'Confirmed password did not match password.'})
            return;
        }

        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.username;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/login', async (req, res) => {
    console.log('hit /api/user/login');
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if(!userData) {
            res.status(400).json({ message: 'Incorrect email or password!!!!'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password!!!!'});
            return;
        }

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = userData.username;

            res.json({ user: userData, message: 'YOU ARE LOGGED IN!'})
        })

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    console.log('logged out')
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
