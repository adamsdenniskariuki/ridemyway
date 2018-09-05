var mongoose = require('mongoose');

var schema = mongoose.Schema;

let rideSchema =  new schema({
    departure_time: Date,
    arrival_time: Date,
    destination: String,
    pickup: String,
    created_by: String,
});

let rideModel = module.exports = mongoose.model('Ride', rideSchema);

