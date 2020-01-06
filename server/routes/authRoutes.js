const router = require('express').Router();
const passport = require('passport');

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
    req.logout();
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;
