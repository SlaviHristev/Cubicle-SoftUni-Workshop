const express = require('express');


function expressConfig(app){
    app.use(express.static(`./src/static`));
    app.use(express.urlencoded({extended: false}));

}

module.exports = expressConfig;