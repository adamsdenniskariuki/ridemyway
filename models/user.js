const mongoose = require('mongoose');

let userSchema =  new mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    mobile: String,
    age: Number,
});

module.exports = mongoose.model('Users', userSchema);