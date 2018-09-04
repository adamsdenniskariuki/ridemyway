const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const rideRoutes = require('./routes/rides');
const config = require('./config');

const app = express();

//mongo db connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

//middleware
app.use(morgan('common'));
app.use(cors());
app.use('/auth', authRoutes);
app.use('/rides', rideRoutes);

//home route
app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to the ride my way API'});
});

app.listen(config.RMW_EXPRESS_PORT, () => {
    console.log('Server is connected');
});

module.exports = app;