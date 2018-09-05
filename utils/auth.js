const jwt = require('jsonwebtoken');
const config = require('../config');

const createToken = (id) => {
    return jwt.sign(
        { data: id }, 
        config.RMW_SECRET, 
        { expiresIn: '1h' }
    );
}

const authenticate = (req, res) => {
    if(!req.header('Authorization') || !req.headers.authorization.split(' ')[0] === 'Bearer'){
        return null;
    }
    const authorizationHeader = req.header('Authorization');
    const token = authorizationHeader.split(' ')[1];
    try {
        return jwt.verify(token, config.RMW_SECRET);
    } catch(err) {
        return null;
    }
}

module.exports.createToken = createToken;

module.exports.authenticate = authenticate;

