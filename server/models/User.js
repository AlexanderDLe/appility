const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    email: String,
    username: String,
    password: String
});

module.exports = User = mongoose.model('users', userSchema);
