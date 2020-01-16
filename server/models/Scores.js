const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    JavaScript: Number,
    Git: Number,
    NodeExpress: Number,
    React: Number,
    Redux: Number,
    Test: Number,
    TypeScript: Number
});

module.exports = Scores = mongoose.model('profile', ScoreSchema);
