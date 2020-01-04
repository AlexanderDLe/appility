const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// Connect to database
mongoose
    .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB running...'))
    .catch(err => console.error(err));

// Create express app
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.use('/', require('./routes/authRoutes'));

// If in production, use build directories
if (process.env.NODE_ENV === 'production') {
    // Ensure express serves production assets
    // like main.js file, or main.css file
    const path = require('path');
    app.use(express.static(path.join(__dirname, '/client/build')));
    // Previously: app.use(express.static('/client/build'));

    // Ensure express serves index.html file
    // if it doesn't recognize the route
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
