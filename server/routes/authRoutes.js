const passport = require('passport');
const router = require('express').Router();

// Sign in with google
router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

// After Google sign-in, redirect to homepage
router.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/');
    }
);

// Log out user
router.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
});

// Make API call to get user info
router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;
