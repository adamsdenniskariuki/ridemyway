const express = require('express');
const validator = require('express-validator/check');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');

const userModel = require('../models/user')
const authUtils = require('../utils/auth');

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.json({ message: 'Send a /POST request to /signup or /login'});
})

//signup
authRouter.post('/signup', [
    validator.check('email', 'invalid email').isEmail(),
    validator.check('first_name', 'first name is missing or invalid').isAlpha(),
    validator.check('last_name', 'last name is missing or invalid').isAlpha(),
    validator.check('password', 'password is missing or invalid').isLength(5).isAlphanumeric(),
    validator.check('mobile', 'mobile is missing or invalid').isInt(),
],  (req, res) => {
    const errors = validator.validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({ message: errors.array() });
    } else {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            let newUser = new userModel({
                first_name: req.body.first_name, 
                last_name: req.body.last_name,
                email: req.body.email,
                mobile: req.body.mobile,
                password: hash,
            });
            newUser.save(function (err) {
                if (err) {
                    return res.status(500).json({ message: `an error occured: ${err}` });
                }
                return res.status(201).json({ message: 'user successfully saved' });
            });
        });
    }
});

//login
authRouter.post('/login', [
    validator.check('email', 'invalid email').isEmail(),
    validator.check('password', 'password is missing or invalid').isLength(5).isAlphanumeric(),
],  (req, res) => {
    const errors = validator.validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({ message: errors.array() });
    } else {
        var query = userModel.where({email: req.body.email});
        query.findOne((err, user) => {
            if(err){
                return res.status(500).json({ message: `an error occured: ${err}` });
            }
            if(user === null){
                return res.status(404).json({ message: 'user not found' });
            }
            bcrypt.compare(req.body.password, user.password, function(err, passwordResponse) {
                if(!passwordResponse) {
                    return res.status(403).json({ message: 'invalid email or password' });
                }
                const token  = authUtils.createToken(user._id);
                return res.status(200).json({ message: 'login successful', token }); 
              });
        })
    }
});

module.exports = authRouter;