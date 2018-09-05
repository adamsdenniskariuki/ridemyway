var mongoose = require('mongoose');

var schema = mongoose.Schema;

let userSchema =  new schema({
    email: {
        type: String,
        unique: true,
    },
    first_name: String,
    last_name: String,
    password: String,
    mobile: String,
});

let userModel = module.exports = mongoose.model('User', userSchema);

