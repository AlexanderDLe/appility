const router = require('express').Router();
const Scores = require('../models/Scores');
const User = require('../models/User');

router.get('/scores', async (req, res) => {
    try {
        const scores = await Scores.findOne({
            user: req.user.id
        });

        if (!scores) {
            return res.json({ msg: 'There are no scores for this user' });
        }
        res.json(scores);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/scores', async (req, res) => {
    console.log(req.body);
    const { subject, score } = req.body;
    const scoreFields = { [subject]: score };
    scoreFields.user = req.user.id;

    try {
        let scores = await Scores.findOne({ user: req.user.id });
        if (scores) {
            // Update if exists
            scores = await Scores.findOneAndUpdate(
                { user: req.user.id },
                { $set: scoreFields },
                { new: true }
            );
            return res.json(scores);
        }
        // Create if it doesn't exist
        scores = new Scores(scoreFields);
        await scores.save();
        res.json(scores);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error.');
    }
});

module.exports = router;
