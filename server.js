const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users')
const profile = require("./routes/api/profile");
const post = require("./routes/api/post");
const app = express();

// DB config
const db = require('./config/keys').mongoURI;

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Connect to MongoDB 
mongoose
    .connect(db)
    .then( () => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
// Test Route
//app.get('/', (req, res) => res.send('Hello'));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport.js')(passport);

// Use Route
app.use('/api/users', users);
app.use("/api/profile", profile);
app.use("/api/post", post);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
