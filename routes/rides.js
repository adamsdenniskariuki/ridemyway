const express = require('express');
const authUtils = require('../utils/auth');

const rideModel = require('../models/ride');

const rideRouter = express.Router();

//authentication middleware
rideRouter.use((req, res, next) => {
    const user = authUtils.authenticate(req, res);
    if(!user){
        return res.status(403).json({ message: 'access denied. login to get a token.' });
    }
    req.user = user;
    next();
});

//get all rides
rideRouter.get('/', (req, res, next) => {
    rideModel.find((err, rides) => {
        if (err) {
            return res.status(422).json({ message: `an error occured: ${err}` });
        }
        return res.status(200).json({ message: 'all rides retrieved', rides });
    });
})

module.exports = rideRouter;