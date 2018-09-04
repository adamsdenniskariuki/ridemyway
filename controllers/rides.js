const express = require('express');

const rideRouter = express.Router();

rideRouter.get('/', (req, res) => {
    res.json({ message: 'ride routes here'});
})

module.exports = rideRouter;