import express from 'express';
import { authRoutes } from './routes/authRoutes';
import mongoose from 'mongoose';
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Models
require('./models/User');

// Passport
require('./services/passport');

// DB
mongoose
    .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB running...'))
    .catch(err => console.log(err));

// Express App
const app = express();

// Middleware
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(authRoutes);

// App
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
