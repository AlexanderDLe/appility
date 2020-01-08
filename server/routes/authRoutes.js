const router = require('express').Router();
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
/**
 * Email Authentication
 */

router.post('/api/login', (req, res, next) => {
    console.log('/api/login route reached..');
    passport.authenticate('local', (err, user, info) => {
        console.log('Within passport.authenticate');
        if (err) return next(err);
        if (!user) return res.redirect('/');
        req.logIn(user, err => {
            if (err) return next(err);
            return res.redirect('/');
        });
    })(req, res, next);
});

router.post(
    '/api/register',
    [
        check('username', 'Username is required.')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email.').isEmail(),
        check(
            'password',
            'Please enter a password between 6 or 20 characters.'
        ).isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, email, password } = req.body;

        try {
            let user = await User.findOne({ email });

            // If user already exists, return error
            if (user) {
                res.status(400).json({
                    errors: [{ msg: 'User already exists.' }]
                });
            }
            // Otherwise create new user
            user = new User({
                username,
                email,
                password
            });
            // Before saving new user, encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user into database
            await user.save();

            // Send Success Response
            res.send('Registration Success');
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server Error');
        }
    }
);

/**
 * Google Authentication
 */
router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);
router.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/');
    }
);
/**
 * Facebook Authentication
 */
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
        res.redirect('/');
    }
);

/**
 * General
 */

router.get('/api/logout', (req, res) => {
    req.session = undefined;
    req.logout();
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;
