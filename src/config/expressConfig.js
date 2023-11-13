const express = require('express');
const cookieParser = require('cookie-parser');


function expressConfig(app){
    app.use(express.static(`./src/static`));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());

}

module.exports = expressConfig;