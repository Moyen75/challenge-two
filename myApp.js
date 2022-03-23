var express = require('express');
var app = express();

















app.get('/', async (req, res, next) => {
    res.send("Hello Express")
})

















module.exports = app;
