import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    username: String
});

mongoose.model('users', userSchema);
