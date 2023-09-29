const router = require('express').Router();
const { User } = require('../../models');

//new user
router.post('/singup', async (req, res) => {
    try {
        if(req.body.password !== req.body.confirmPassword) {
            res.status(400).json({ message: 'Confirmed password did not match password.'})
            return;
        }
        
        const newUserData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        await User.create(newUserData);

        req.session.save(() => {
            req.session.user_id = newUserData.username;
            req.session.logged_in = true;

            res.status(200).json(newUserData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/login', async (req, res) => {
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
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
