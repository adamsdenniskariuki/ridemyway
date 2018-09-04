const express = require('express');

const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.json({ message: 'auth routes here'});
})

module.exports = authRouter;