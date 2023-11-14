const express = require('express');
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/authMiddleware');
const path = require('path');

function expressConfig(app){
    app.use(express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfig;