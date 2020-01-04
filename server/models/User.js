const mongoose = require('mongoose');
const { Schema } = mongoose;

// User template
const userSchema = new Schema({
    googleId: String,
    username: String
});

mongoose.model('users', userSchema);
